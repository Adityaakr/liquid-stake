import { ONE_STABLE, ONE_VARA, RATE_SCALE, UNBONDING_MS, type VaultAsset } from '@/domain/protocol';
import { assetsToShares, instantUnstakeOut, nativeUnstakeOut, varaToKVara } from '@/domain/math';
import { parseRate } from '@/domain/format';
import { ChainError, type Balances, type NetworkId, type ProtocolStats, type StakingAdapter, type TxResult, type UnbondEntry } from './types';

type StoredUnbond = Omit<UnbondEntry, 'amountVara'> & { amountVara: string };
type Persisted = { balances: Record<string, Record<keyof Balances, string>>; unbonding: Record<string, StoredUnbond[]> };

const KEY = 'vaultera.mock.v1';
const ERA_MS = 12 * 60 * 60 * 1000;

/** Rate grows ~14.2% a year, compounding every era. Matches the kit numbers at era 4,182. */
const BASE_ERA = 4182;
const BASE_RATE = parseRate('1.0482');
const APY_BPS = 1420n;
const ERAS_PER_YEAR = 730n;

function rateAtEra(era: number): bigint {
  const delta = era - BASE_ERA;
  // linear per era is fine for a simulation: rate + rate*apy/erasPerYear*delta
  return BASE_RATE + (BASE_RATE * APY_BPS * BigInt(delta)) / (10_000n * ERAS_PER_YEAR);
}

const DEFAULT_BALANCES: Balances = {
  VARA: 1240n * ONE_VARA + (52n * ONE_VARA) / 100n,
  kVARA: 0n,
  wUSDT: 500n * ONE_STABLE,
  wUSDC: 0n,
  kUSDT: 0n,
  kUSDC: 0n,
};

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
const hash = () => '0x' + Array.from(crypto.getRandomValues(new Uint8Array(32)), (b) => b.toString(16).padStart(2, '0')).join('');

function load(): Persisted {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Persisted;
  } catch { /* fresh state */ }
  return { balances: {}, unbonding: {} };
}

/**
 * Deterministic in-memory protocol. Persists per address in localStorage so a refresh keeps
 * positions. Latency is simulated so every pending state in the UI is exercised.
 */
export class MockAdapter implements StakingAdapter {
  readonly kind = 'mock' as const;
  readonly simulated = true;
  private state: Persisted;
  private listeners = new Set<() => void>();
  private latency: number;
  private t0 = Date.now();

  constructor(readonly network: NetworkId = 'mainnet', opts: { latencyMs?: number; storage?: boolean } = {}) {
    this.latency = opts.latencyMs ?? 900;
    this.state = opts.storage === false ? { balances: {}, unbonding: {} } : load();
    this.persist = opts.storage === false ? () => {} : this.persist;
  }

  private persist() {
    try { localStorage.setItem(KEY, JSON.stringify(this.state)); } catch (e) { console.warn('mock persist failed', e); }
  }
  private emit() { this.listeners.forEach((l) => l()); }

  private currentEra(): { era: number; endsAt: number } {
    const elapsed = Date.now() - this.t0;
    const era = BASE_ERA + Math.floor(elapsed / ERA_MS);
    const endsAt = this.t0 + (era - BASE_ERA + 1) * ERA_MS;
    return { era, endsAt };
  }

  async getStats(): Promise<ProtocolStats> {
    const { era, endsAt } = this.currentEra();
    const rate = rateAtEra(era);
    return {
      rate,
      stakeApyBps: APY_BPS,
      vaultApyBps: { USDT: 840n, USDC: 790n },
      vaultSharePrice: { USDT: parseRate('1.0261'), USDC: parseRate('1.0193') },
      vaultTvlUsd: { USDT: 4_200_000, USDC: 2_800_000 },
      vaultUtilizationBps: { USDT: 7200n, USDC: 6400n },
      tvlUsd: 12_400_000,
      totalStakedVara: 8_600_000n * ONE_VARA,
      bufferBps: 720n,
      era,
      eraEndsAt: endsAt,
      rateHistory: [era - 2, era - 1, era].map((e) => ({ era: e, rate: rateAtEra(e) })),
      varaPriceUsd: 0.052,
    };
  }

  private bal(address: string): Balances {
    const s = this.state.balances[address];
    if (!s) return { ...DEFAULT_BALANCES };
    return Object.fromEntries(Object.entries(s).map(([k, v]) => [k, BigInt(v)])) as Balances;
  }
  private setBal(address: string, b: Balances) {
    this.state.balances[address] = Object.fromEntries(Object.entries(b).map(([k, v]) => [k, v.toString()])) as Record<keyof Balances, string>;
    this.persist();
    this.emit();
  }

  async getBalances(address: string): Promise<Balances> {
    await wait(this.latency / 3);
    return this.bal(address);
  }

  async getUnbonding(address: string): Promise<UnbondEntry[]> {
    return (this.state.unbonding[address] ?? []).map((u) => ({ ...u, amountVara: BigInt(u.amountVara) }));
  }

  /** Adapter-side guard so two overlapping writes for one address serialize instead of racing. */
  private locks = new Map<string, Promise<unknown>>();
  private async locked<T>(address: string, fn: () => Promise<T>): Promise<T> {
    const prev = this.locks.get(address) ?? Promise.resolve();
    const next = prev.then(fn, fn);
    this.locks.set(address, next.catch(() => undefined));
    return next;
  }

  private async tx(): Promise<TxResult> {
    await wait(this.latency);
    return { hash: hash(), blockNumber: 12_000_000 + Math.floor((Date.now() - this.t0) / 3000) };
  }

  stake(address: string, vara: bigint): Promise<TxResult> {
    return this.locked(address, async () => {
      if (vara <= 0n) throw new ChainError('Amount must be positive', 'INSUFFICIENT');
      if (vara > this.bal(address).VARA) throw new ChainError('Insufficient VARA balance', 'INSUFFICIENT');
      const { rate } = await this.getStats();
      const r = await this.tx();
      const b = this.bal(address);
      this.setBal(address, { ...b, VARA: b.VARA - vara, kVARA: b.kVARA + varaToKVara(vara, rate) });
      return r;
    });
  }

  unstakeInstant(address: string, vaultera: bigint): Promise<TxResult> {
    return this.locked(address, async () => {
      if (vaultera <= 0n || vaultera > this.bal(address).kVARA) throw new ChainError('Insufficient kVARA balance', 'INSUFFICIENT');
      const { rate } = await this.getStats();
      const { net } = instantUnstakeOut(vaultera, rate);
      const r = await this.tx();
      const b = this.bal(address);
      this.setBal(address, { ...b, kVARA: b.kVARA - vaultera, VARA: b.VARA + net });
      return r;
    });
  }

  unstakeNative(address: string, vaultera: bigint): Promise<TxResult> {
    return this.locked(address, async () => {
      if (vaultera <= 0n || vaultera > this.bal(address).kVARA) throw new ChainError('Insufficient kVARA balance', 'INSUFFICIENT');
      const { rate } = await this.getStats();
      const out = nativeUnstakeOut(vaultera, rate);
      const r = await this.tx();
      const now = Date.now();
      const list = this.state.unbonding[address] ?? [];
      list.push({ id: r.hash.slice(0, 10), amountVara: out.toString(), startedAt: now, claimableAt: now + UNBONDING_MS });
      this.state.unbonding[address] = list;
      const b = this.bal(address);
      this.setBal(address, { ...b, kVARA: b.kVARA - vaultera });
      return r;
    });
  }

  claimUnbonded(address: string, id: string): Promise<TxResult> {
    return this.locked(address, async () => {
      const list = this.state.unbonding[address] ?? [];
      const entry = list.find((u) => u.id === id);
      if (!entry) throw new ChainError('Unbond entry not found', 'UNKNOWN');
      if (Date.now() < entry.claimableAt) throw new ChainError('Unbonding period has not ended', 'UNKNOWN');
      const r = await this.tx();
      this.state.unbonding[address] = (this.state.unbonding[address] ?? []).filter((u) => u.id !== id);
      const b = this.bal(address);
      this.setBal(address, { ...b, VARA: b.VARA + BigInt(entry.amountVara) });
      return r;
    });
  }

  depositVault(address: string, asset: VaultAsset, amount: bigint): Promise<TxResult> {
    return this.locked(address, async () => {
      const dep = `w${asset}` as const;
      const rec = `k${asset}` as const;
      if (amount <= 0n || amount > this.bal(address)[dep]) throw new ChainError(`Insufficient ${dep} balance`, 'INSUFFICIENT');
      const { vaultSharePrice } = await this.getStats();
      const r = await this.tx();
      const b = this.bal(address);
      this.setBal(address, { ...b, [dep]: b[dep] - amount, [rec]: b[rec] + assetsToShares(amount, vaultSharePrice[asset]) });
      return r;
    });
  }

  subscribe(cb: () => void) {
    this.listeners.add(cb);
    return () => { this.listeners.delete(cb); };
  }

  async dispose() { this.listeners.clear(); }

  /** test helper: fast-forward unbonding entries so claims can be exercised */
  _debugFastForward(address: string) {
    for (const u of this.state.unbonding[address] ?? []) u.claimableAt = Date.now() - 1;
    this.persist();
    this.emit();
  }
}

export { RATE_SCALE };
