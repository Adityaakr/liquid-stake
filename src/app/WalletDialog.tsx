import { ExternalLink } from 'lucide-react';
import { Badge, Button, Dialog } from '@/ui';
import { useStore } from '@/chain/store';
import { WALLETS, detectWallets } from '@/chain/wallet';
import { shortAddress } from '@/domain/format';

export function WalletDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { connect, connectDemo, connecting, accounts, account, selectAccount, disconnect, adapter } = useStore();
  const detected = detectWallets();

  const tryConnect = async () => {
    try { await connect(); onClose(); } catch { /* toast already shown */ }
  };

  return (
    <Dialog open={open} onClose={onClose} title={account ? 'Account' : 'Connect a wallet'} width={460}>
      {account ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {(accounts.length ? accounts : [account]).map((a) => (
            <button key={a.address} type="button" className="ap-acct" aria-pressed={a.address === account.address} onClick={() => { selectAccount(a); }}>
              <span style={{ width: 34, height: 34, borderRadius: 99, background: 'var(--surface-raised)', border: '1px solid var(--line-2)', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--tide-300)' }}>{(a.name ?? a.address).slice(0, 1).toUpperCase()}</span>
              <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{a.name ?? 'Account'}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-3)' }}>{shortAddress(a.address, 8, 6)}</span>
              </span>
              <Badge size="sm" mono style={{ marginLeft: 'auto' }}>{a.source}</Badge>
            </button>
          ))}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
            <Button variant="ghost" onClick={onClose}>Close</Button>
            <Button variant="danger" onClick={() => { disconnect(); onClose(); }}>Disconnect</Button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.6 }}>
            Tide works with any Substrate wallet extension. Your keys never leave the wallet.
          </p>
          {WALLETS.map((w) => {
            const has = detected.includes(w.id);
            return has ? (
              <button key={w.id} type="button" className="ap-wallet" onClick={tryConnect} disabled={connecting} style={{ cursor: 'pointer' }}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{w.label}</span>
                <Badge tone="ok" size="sm" dot>detected</Badge>
              </button>
            ) : (
              <a key={w.id} className="ap-wallet" href={w.url} target="_blank" rel="noreferrer">
                <span style={{ fontWeight: 600, fontSize: 14 }}>{w.label}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-3)' }}>Install <ExternalLink size={13} strokeWidth={1.5} /></span>
              </a>
            );
          })}
          <Button block size="lg" onClick={tryConnect} loading={connecting} style={{ marginTop: 6 }}>
            Connect
          </Button>
          {adapter.simulated && (
            <Button block variant="ghost" onClick={() => { connectDemo(); onClose(); }}>Use a demo account</Button>
          )}
        </div>
      )}
    </Dialog>
  );
}
