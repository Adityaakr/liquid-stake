import { useState, type CSSProperties } from 'react';
import vara from '@/assets/tokens/vara.png';
import tideVara from '@/assets/tokens/tide-vara.png';
import usdt from '@/assets/tokens/usdt.png';
import tideUsdt from '@/assets/tokens/tide-usdt.png';
import usdc from '@/assets/tokens/usdc.png';
import tideUsdc from '@/assets/tokens/tide-usdc.png';

export type TokenSymbol = 'VARA' | 'tideVARA' | 'wUSDT' | 'USDT' | 'tideUSDT' | 'wUSDC' | 'USDC' | 'tideUSDC';

const META: Record<TokenSymbol, { letter: string; color: string; src: string }> = {
  VARA: { letter: 'V', color: '--tok-vara', src: vara },
  tideVARA: { letter: 'V', color: '--tok-vara', src: tideVara },
  wUSDT: { letter: 'T', color: '--tok-usdt', src: usdt },
  USDT: { letter: 'T', color: '--tok-usdt', src: usdt },
  tideUSDT: { letter: 'T', color: '--tok-usdt', src: tideUsdt },
  wUSDC: { letter: 'C', color: '--tok-usdc', src: usdc },
  USDC: { letter: 'C', color: '--tok-usdc', src: usdc },
  tideUSDC: { letter: 'C', color: '--tok-usdc', src: tideUsdc },
};

export function TokenIcon({ token = 'VARA', size = 28, style }: { token?: TokenSymbol; size?: number; style?: CSSProperties }) {
  const m = META[token];
  const [err, setErr] = useState(false);
  const c = `var(${m.color})`;
  if (!err) {
    return <img src={m.src} alt={token} width={size} height={size} onError={() => setErr(true)} style={{ width: size, height: size, minWidth: size, borderRadius: '50%', display: 'inline-block', verticalAlign: 'middle', ...style }} />;
  }
  return (
    <span aria-label={token} style={{ width: size, height: size, minWidth: size, borderRadius: 99, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size * 0.44, color: c, background: `color-mix(in srgb,${c} 16%,transparent)`, border: `1px solid color-mix(in srgb,${c} 45%,transparent)`, ...style }}>
      {m.letter}
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
