import { useState, type CSSProperties } from 'react';
import vara from '@/assets/tokens/vara.png';
import usdt from '@/assets/tokens/usdt.png';
import usdc from '@/assets/tokens/usdc.png';

export type TokenSymbol = 'VARA' | 'kVARA' | 'wUSDT' | 'USDT' | 'kUSDT' | 'wUSDC' | 'USDC' | 'kUSDC';

/** Receipt tokens reuse the underlying asset's mark with a small "k" badge, the same construction the kit used for its receipts. */
const META: Record<TokenSymbol, { letter: string; color: string; src: string; receipt: boolean }> = {
  VARA: { letter: 'V', color: '--tok-vara', src: vara, receipt: false },
  kVARA: { letter: 'V', color: '--tok-vara', src: vara, receipt: true },
  wUSDT: { letter: 'T', color: '--tok-usdt', src: usdt, receipt: false },
  USDT: { letter: 'T', color: '--tok-usdt', src: usdt, receipt: false },
  kUSDT: { letter: 'T', color: '--tok-usdt', src: usdt, receipt: true },
  wUSDC: { letter: 'C', color: '--tok-usdc', src: usdc, receipt: false },
  USDC: { letter: 'C', color: '--tok-usdc', src: usdc, receipt: false },
  kUSDC: { letter: 'C', color: '--tok-usdc', src: usdc, receipt: true },
};

function ReceiptBadge({ size }: { size: number }) {
  const s = Math.max(10, Math.round(size * 0.42));
  return (
    <span aria-hidden style={{ position: 'absolute', right: -Math.round(s * 0.18), bottom: -Math.round(s * 0.18), width: s, height: s, borderRadius: 99, background: 'linear-gradient(135deg,#406AE4,#5290F4)', border: `${Math.max(1, Math.round(size * 0.05))}px solid #FFFFFF`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s * 0.62, lineHeight: 1, color: '#FFFFFF' }}>
      k
    </span>
  );
}

export function TokenIcon({ token = 'VARA', size = 28, style }: { token?: TokenSymbol; size?: number; style?: CSSProperties }) {
  const m = META[token];
  const [err, setErr] = useState(false);
  const c = `var(${m.color})`;
  const mark = !err ? (
    <img src={m.src} alt="" width={size} height={size} onError={() => setErr(true)} style={{ width: size, height: size, minWidth: size, borderRadius: '50%', display: 'block' }} />
  ) : (
    <span style={{ width: size, height: size, minWidth: size, borderRadius: 99, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size * 0.44, color: c, background: `color-mix(in srgb,${c} 16%,transparent)`, border: `1px solid color-mix(in srgb,${c} 45%,transparent)` }}>
      {m.letter}
    </span>
  );
  return (
    <span role="img" aria-label={token} style={{ position: 'relative', display: 'inline-flex', width: size, height: size, minWidth: size, verticalAlign: 'middle', ...style }}>
      {mark}
      {m.receipt && <ReceiptBadge size={size} />}
    </span>
  );
}

export function TokenBadge({ token = 'VARA', size = 28, showName = true, sub, style }: { token?: TokenSymbol; size?: number; showName?: boolean; sub?: string; style?: CSSProperties }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, ...style }}>
      <TokenIcon token={token} size={size} />
      {showName ? (
        <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1.25 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: Math.max(12, size * 0.5) }}>{token}</span>
          {sub ? <span style={{ fontSize: 11.5, color: 'var(--text-3)' }}>{sub}</span> : null}
        </span>
      ) : null}
    </span>
  );
}
