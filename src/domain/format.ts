import { RATE_SCALE, VARA_DECIMALS, STABLE_DECIMALS } from './protocol';

/** Parse a decimal string into base units. Returns null when the string is not a valid decimal. */
export function parseUnits(raw: string, decimals: number): bigint | null {
  const s = raw.trim().replace(/,/g, '');
  if (!/^\d*(\.\d*)?$/.test(s) || s === '' || s === '.') return null;
  const [intPart, fracPart = ''] = s.split('.');
  if (fracPart.length > decimals) return null;
  const whole = BigInt(intPart || '0') * 10n ** BigInt(decimals);
  const frac = fracPart ? BigInt(fracPart.padEnd(decimals, '0')) : 0n;
  return whole + frac;
}

export const parseVara = (raw: string) => parseUnits(raw, VARA_DECIMALS);
export const parseStable = (raw: string) => parseUnits(raw, STABLE_DECIMALS);

/** Format base units to a decimal string, trimming to `dp` decimals (no rounding up past balance). */
export function formatUnits(value: bigint, decimals: number, dp = 2, group = true): string {
  const neg = value < 0n;
  const abs = neg ? -value : value;
  const base = 10n ** BigInt(decimals);
  const whole = abs / base;
  const frac = abs % base;
  const fracStr = frac.toString().padStart(decimals, '0').slice(0, dp);
  const wholeStr = group ? whole.toLocaleString('en-US') : whole.toString();
  return `${neg ? '-' : ''}${wholeStr}${dp > 0 ? '.' + fracStr : ''}`;
}

export const formatVara = (v: bigint, dp = 2) => formatUnits(v, VARA_DECIMALS, dp);
export const formatStable = (v: bigint, dp = 2) => formatUnits(v, STABLE_DECIMALS, dp);

/** Rate scaled by 1e9 to a 4 decimal string, e.g. 1048200000n -> "1.0482". */
export function formatRate(rate: bigint, dp = 4): string {
  return formatUnits(rate, 9, dp, false);
}

export function parseRate(s: string): bigint {
  const v = parseUnits(s, 9);
  if (v === null) throw new Error(`bad rate ${s}`);
  return v;
}

/** Convert a base-unit amount to a JS number for display math only (fiat echo). */
export function toNumber(value: bigint, decimals: number): number {
  return Number(value) / 10 ** decimals;
}

export function formatUsd(n: number): string {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatCompactUsd(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return formatUsd(n);
}

export function bpsToPercent(bps: bigint, dp = 1): string {
  return (Number(bps) / 100).toFixed(dp) + '%';
}

export function shortAddress(addr: string, head = 6, tail = 4): string {
  if (addr.length <= head + tail + 1) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}

export function formatCountdown(ms: number): string {
  if (ms <= 0) return 'now';
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export { RATE_SCALE };
