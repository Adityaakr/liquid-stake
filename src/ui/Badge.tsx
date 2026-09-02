import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type Tone = 'neutral' | 'accent' | 'ok' | 'warn' | 'danger' | 'info';
const T: Record<Tone, [string, string, string]> = {
  neutral: ['var(--text-2)', 'var(--line-2)', 'transparent'],
  accent: ['var(--tide-300)', 'var(--accent-line)', 'var(--accent-soft)'],
  ok: ['var(--ok)', 'rgba(54,236,189,.35)', 'var(--ok-soft)'],
  warn: ['var(--warn)', 'rgba(255,194,75,.35)', 'var(--warn-soft)'],
  danger: ['var(--danger)', 'rgba(255,107,122,.35)', 'var(--danger-soft)'],
  info: ['var(--info)', 'rgba(91,209,255,.35)', 'var(--info-soft)'],
};

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  dot?: boolean;
  mono?: boolean;
  size?: 'sm' | 'md';
  children?: ReactNode;
  style?: CSSProperties;
};

export function Badge({ tone = 'neutral', dot, mono, size = 'md', children, style, ...rest }: BadgeProps) {
  const [c, b, bg] = T[tone];
  const sm = size === 'sm';
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7, height: sm ? 22 : 28, padding: sm ? '0 9px' : '0 12px',
        borderRadius: 'var(--r-pill)', border: `1px solid ${b}`, background: bg, color: c, fontSize: sm ? 11.5 : 12.5,
        fontWeight: 500, fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)', letterSpacing: mono ? '0' : '0.02em',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 99, background: c, boxShadow: `0 0 8px ${c}` }} />}
      {children}
    </span>
  );
}
