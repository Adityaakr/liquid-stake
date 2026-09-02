import { useMemo, useState } from 'react';
import { useOutletContext } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { AmountField, Badge, Bento, Button, Dialog, Meter, Stat, TokenBadge, TokenIcon, type TokenSymbol } from '@/ui';
import { useStore } from '@/chain/store';
import { assetsToShares, validateAmount } from '@/domain/math';
import { bpsToPercent, formatCompactUsd, formatRate, formatStable, parseStable } from '@/domain/format';
import { STABLE_DECIMALS, type VaultAsset } from '@/domain/protocol';
import { Row } from './bits';
import type { AppOutlet } from './AppLayout';

function VaultCard({ asset }: { asset: VaultAsset }) {
  const { openWallet } = useOutletContext<AppOutlet>();
  const { stats, balances, account, adapter, run, tx } = useStore();
  const [open, setOpen] = useState(false);
  const [amt, setAmt] = useState('');
  const dep = `w${asset}` as TokenSymbol;
  const rec = `k${asset}` as TokenSymbol;
  const bal = balances?.[dep as 'wUSDT' | 'wUSDC'] ?? 0n;
  const parsed = useMemo(() => parseStable(amt), [amt]);
  const v = validateAmount(amt, parsed, balances ? bal : null);
  const share = stats?.vaultSharePrice[asset];
  const util = stats ? Number(stats.vaultUtilizationBps[asset]) / 100 : 0;
  const apy = stats ? bpsToPercent(stats.vaultApyBps[asset]) : '…';
  const busy = tx.stage === 'broadcast';

  const doDep = async () => {
    if (!account) { setOpen(false); openWallet(); return; }
    if (!v.ok || !parsed || !share) return;
    const a = parsed;
    const ok = await run(`Deposit ${dep}`, (addr) => adapter.depositVault(addr, asset, a), { title: `Deposited ${formatStable(a)} ${dep}`, detail: `You hold ${formatStable(assetsToShares(a, share))} ${rec} · interest accrues to share price.` });
    if (ok) { setOpen(false); setAmt(''); }
  };

  return (
    <Bento variant="app" pad={26}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <TokenBadge token={rec} size={38} sub={`deposit ${dep}`} />
        <Badge tone={util < 80 ? 'ok' : 'warn'} size="sm" dot>{util < 80 ? 'healthy' : 'near kink'}</Badge>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, margin: '22px 0 16px' }}>
        <Stat label="Deposit APY" value={apy} size="sm" gradient loading={!stats} />
        <Stat label="Vault TVL" value={stats ? formatCompactUsd(stats.vaultTvlUsd[asset]) : '…'} size="sm" loading={!stats} />
        <Stat label="Share price" value={share ? formatRate(share) : '…'} size="sm" mono loading={!stats} />
      </div>
      <Meter label="Utilization" value={util} marker={80} tone={util < 80 ? 'grad' : 'danger'} />
      <div style={{ margin: '12px 0 20px' }}>
        <Row k="Collateral accepted" v="kVARA only" />
        <Row k="Your shares" v={balances ? `${formatStable(balances[rec as 'kUSDT' | 'kUSDC'])} ${rec}` : '—'} />
      </div>
      <div style={{ marginTop: 'auto' }}>
        <Button block size="lg" onClick={() => setOpen(true)}>Deposit {dep}</Button>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={`Deposit ${dep}`}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button disabled={!!account && !v.ok} loading={busy} onClick={doDep}>{account ? 'Confirm deposit' : 'Connect wallet'}</Button>
          </>
        }
      >
        <AmountField
          label="You deposit"
          token={dep}
          balance={balances ? formatStable(bal) : undefined}
          value={amt}
          onChange={setAmt}
          onMax={balances ? () => setAmt(formatStable(bal, STABLE_DECIMALS).replace(/,/g, '').replace(/\.?0+$/, '')) : undefined}
          fiat={parsed && share ? `→ ${formatStable(assetsToShares(parsed, share))} ${rec}` : ''}
          hint={`APY ${apy}`}
          error={amt && !v.ok && v.reason !== 'empty' ? (v.reason === 'insufficient' ? 'Not enough balance' : 'Enter a valid amount') : undefined}
        />
      </Dialog>
    </Bento>
  );
}

function FlowChip({ tok, label }: { tok?: TokenSymbol; label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(33,28,48,.9)', border: '1px solid rgba(163,164,255,.3)', borderRadius: 99, padding: '8px 14px 8px 9px', whiteSpace: 'nowrap' }}>
      {tok ? <TokenIcon token={tok} size={20} /> : null}
      <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--text-1)' }}>{label}</span>
    </span>
  );
}
const Arrow = () => <ChevronRight size={15} strokeWidth={1.5} style={{ color: 'var(--tide-400)', opacity: 0.85, flexShrink: 0 }} />;

export function VaultsPage() {
  const { notify } = useStore();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="ap-vaults">
        <VaultCard asset="USDT" />
        <VaultCard asset="USDC" />
      </div>
      <Bento variant="app" pad={26}>
        <div className="ap-yield">
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20 }}>Where the yield comes from</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0 14px', flexWrap: 'wrap' }}>
              <FlowChip tok="kVARA" label="kVARA collateral" /><Arrow />
              <FlowChip label="loopers borrow stables" /><Arrow />
              <FlowChip label="interest accrues" /><Arrow />
              <FlowChip tok="kUSDT" label="share price rises" />
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 2, flexWrap: 'wrap' }}>
              {['max LTV 50%', 'liq. threshold 65%', 'penalty 8%', 'kink 80%'].map((t) => (
                <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.05em', color: 'var(--text-3)', border: '1px solid var(--line-1)', borderRadius: 99, padding: '4px 10px' }}>{t}</span>
              ))}
            </div>
          </div>
          <Button variant="secondary" onClick={() => notify({ tone: 'info', title: 'Borrowing opens in v1.1', detail: 'Loop kVARA → stables → VARA from a single screen.' })}>Borrow against kVARA</Button>
        </div>
      </Bento>
    </div>
  );
}
