import { useId, type CSSProperties, type ReactNode } from 'react';
import { TokenBadge, type TokenSymbol } from './Token';

export type AmountFieldProps = {
  label?: string;
  token?: TokenSymbol;
  balance?: string;
  value: string;
  onChange: (v: string) => void;
  onMax?: () => void;
  fiat?: ReactNode;
  hint?: ReactNode;
  error?: string;
  disabled?: boolean;
  style?: CSSProperties;
};

const DECIMAL = /^(\d+)?(\.\d*)?$/;
const GROUPED = /^\d{1,3}(,\d{3})+(\.\d*)?$/;

/** Accepts typed and pasted amounts: "1,000" and "1,000.5" are thousands groups, "1,5" alone is a locale decimal. */
export function normalizeAmountInput(v: string): string {
  const s = v.trim();
  if (!s.includes(',')) return s;
  if (GROUPED.test(s) || s.includes('.')) return s.replace(/,/g, '');
  return s.replace(',', '.');
}

export function AmountField({ label = 'Amount', token = 'VARA', balance, value, onChange, onMax, fiat, hint, error, disabled, style }: AmountFieldProps) {
  const errId = useId();
  return (
    <div className="t-amt" data-error={error ? 'true' : undefined} style={style}>
      <div className="t-amt-x">
        <span>{label}</span>
        {balance != null ? (
          <span>
            Balance <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-2)' }}>{balance}</span>
          </span>
        ) : null}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <input
          inputMode="decimal"
          autoComplete="off"
          placeholder="0.00"
          aria-label={label}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errId : undefined}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            const v = normalizeAmountInput(e.target.value);
            if (v === '' || DECIMAL.test(v)) onChange(v);
          }}
        />
        {onMax ? (
          <button type="button" className="t-amt-max" onClick={onMax} disabled={disabled}>
            MAX
          </button>
        ) : null}
        <TokenBadge token={token} size={26} />
      </div>
      <div className="t-amt-x">
        <span id={errId} style={{ fontFamily: 'var(--font-mono)' }} className={error ? 't-amt-err' : undefined}>{error ?? fiat ?? ''}</span>
        <span>{hint ?? ''}</span>
      </div>
    </div>
  );
}
