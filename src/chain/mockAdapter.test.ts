import { beforeEach, describe, expect, it } from 'vitest';
import { MockAdapter } from './mockAdapter';
import { ONE_STABLE, ONE_VARA } from '@/domain/protocol';
import { instantUnstakeOut, varaToKVara } from '@/domain/math';

const A = 'kGj1akEAemmGoVyFqeHVSNUyUj1mJp3gazUYy7Zs2p7BsgT88';
let m: MockAdapter;
beforeEach(() => { m = new MockAdapter('mainnet', { latencyMs: 0, storage: false }); });

describe('MockAdapter', () => {
  it('starts with the kit balances', async () => {
    const b = await m.getBalances(A);
    expect(b.VARA).toBe(1240n * ONE_VARA + (52n * ONE_VARA) / 100n);
    expect(b.kVARA).toBe(0n);
  });
  it('stake moves VARA into kVARA at the current rate', async () => {
    const { rate } = await m.getStats();
    await m.stake(A, 100n * ONE_VARA);
    const b = await m.getBalances(A);
    expect(b.kVARA).toBe(varaToKVara(100n * ONE_VARA, rate));
  });
  it('rejects staking more than the balance', async () => {
    await expect(m.stake(A, 10_000n * ONE_VARA)).rejects.toThrow(/Insufficient/);
  });
  it('instant unstake applies the fee', async () => {
    await m.stake(A, 100n * ONE_VARA);
    const before = await m.getBalances(A);
    const { rate } = await m.getStats();
    await m.unstakeInstant(A, before.kVARA);
    const after = await m.getBalances(A);
    expect(after.VARA - before.VARA).toBe(instantUnstakeOut(before.kVARA, rate).net);
    expect(after.kVARA).toBe(0n);
  });
  it('native unstake creates a 7 day unbond entry that can be claimed after fast forward', async () => {
    await m.stake(A, 100n * ONE_VARA);
    const b = await m.getBalances(A);
    await m.unstakeNative(A, b.kVARA);
    const [u] = await m.getUnbonding(A);
    expect(u.claimableAt - u.startedAt).toBe(7 * 86_400_000);
    await expect(m.claimUnbonded(A, u.id)).rejects.toThrow(/not ended/);
    m._debugFastForward(A);
    const before = (await m.getBalances(A)).VARA;
    await m.claimUnbonded(A, u.id);
    expect((await m.getBalances(A)).VARA - before).toBe(u.amountVara);
    expect(await m.getUnbonding(A)).toHaveLength(0);
  });
  it('vault deposit mints shares at the share price', async () => {
    await m.depositVault(A, 'USDT', 100n * ONE_STABLE);
    const b = await m.getBalances(A);
    expect(b.wUSDT).toBe(400n * ONE_STABLE);
    expect(b.kUSDT).toBeGreaterThan(0n);
    expect(b.kUSDT).toBeLessThan(100n * ONE_STABLE);
  });
  it('notifies subscribers on state change', async () => {
    let n = 0;
    const off = m.subscribe(() => { n++; });
    await m.stake(A, ONE_VARA);
    off();
    await m.stake(A, ONE_VARA);
    expect(n).toBe(1);
  });
});

describe('MockAdapter regressions from review', () => {
  it('persists unbond entries across a reload (bigint serialization)', async () => {
    localStorage.clear();
    const a = new MockAdapter('mainnet', { latencyMs: 0 });
    await a.stake(A, 100n * ONE_VARA);
    const b = await a.getBalances(A);
    await a.unstakeNative(A, b.kVARA);
    await a.stake(A, 50n * ONE_VARA);
    const fresh = new MockAdapter('mainnet', { latencyMs: 0 });
    expect(await fresh.getUnbonding(A)).toHaveLength(1);
    expect((await fresh.getBalances(A)).VARA).toBe((await a.getBalances(A)).VARA);
    localStorage.clear();
  });
  it('serializes overlapping writes for one address', async () => {
    const before = (await m.getBalances(A)).VARA;
    await Promise.all([m.stake(A, 100n * ONE_VARA), m.stake(A, 100n * ONE_VARA)]);
    expect((await m.getBalances(A)).VARA).toBe(before - 200n * ONE_VARA);
  });
  it('rejects the second overlapping write when the first drains the balance', async () => {
    const all = (await m.getBalances(A)).VARA;
    const results = await Promise.allSettled([m.stake(A, all), m.stake(A, ONE_VARA)]);
    expect(results[0].status).toBe('fulfilled');
    expect(results[1].status).toBe('rejected');
  });
});
