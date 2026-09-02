import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { ArrowLeft, BookOpen, Droplets, ShieldCheck, Vault, Wallet } from 'lucide-react';
import './app.css';
import { Badge, Bento, Button, Toast } from '@/ui';
import { useStore } from '@/chain/store';
import { NETWORKS } from '@/chain/networks';
import { formatCountdown, formatRate, shortAddress } from '@/domain/format';
import { useNow } from './bits';
import { WalletDialog } from './WalletDialog';

const TITLES: Record<string, string> = { '/app': 'Stake', '/app/vaults': 'Stable vaults', '/app/portfolio': 'Portfolio' };

function GlowBar({ pct, height = 6 }: { pct: number; height?: number }) {
  return (
    <div style={{ position: 'relative', height, background: 'var(--ink-700)', borderRadius: 99, overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', borderRadius: 99, background: 'var(--grad-tide)', boxShadow: '0 0 12px rgba(163,164,255,.7)' }} />
    </div>
  );
}

function useEraProgress() {
  const { stats } = useStore();
  const now = useNow();
  if (!stats) return { pct: 0, left: '—' };
  const eraMs = 12 * 60 * 60 * 1000;
  const left = stats.eraEndsAt - now;
  return { pct: Math.max(0, Math.min(100, ((eraMs - left) / eraMs) * 100)), left: formatCountdown(left) };
}

function NetworkCard() {
  const { stats, statsError, network, adapter } = useStore();
  const { pct, left } = useEraProgress();
  return (
    <Bento variant="app" pad={14}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: 'var(--text-1)', fontWeight: 500 }}>
        <span style={{ width: 7, height: 7, borderRadius: 99, background: 'var(--ok)', boxShadow: '0 0 10px var(--ok)' }} />
        {NETWORKS[network].label}
        {adapter.simulated && <Badge size="sm" tone="warn" style={{ marginLeft: 'auto' }}>simulation</Badge>}
      </div>
      <div style={{ margin: '10px 0 6px' }}><GlowBar pct={pct} height={5} /></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-3)' }}>
        <span>era {stats ? stats.era.toLocaleString('en-US') : '—'}</span><span>ends {left}</span>
      </div>
      {statsError && <div title={statsError} style={{ marginTop: 8, fontSize: 11, color: 'var(--danger)' }}>stats unavailable</div>}
    </Bento>
  );
}

const NAV = [
  { to: '/app', label: 'Stake', icon: Droplets, end: true },
  { to: '/app/vaults', label: 'Vaults', icon: Vault },
  { to: '/app/portfolio', label: 'Portfolio', icon: Wallet },
];

function Sidebar() {
  return (
    <aside className="ap-side">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 12px', marginBottom: 28 }}>
        <NavLink to="/" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--text-1)', textDecoration: 'none' }}>tide</NavLink>
        <Badge size="sm" mono>app</Badge>
      </div>
      <nav aria-label="App" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className="ap-nav"><Icon size={17} strokeWidth={1.5} />{label}</NavLink>
        ))}
      </nav>
      <div className="eyebrow" style={{ fontSize: 10.5, margin: '24px 13px 8px' }}>Resources</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <a className="ap-nav" href="https://wiki.vara.network/" target="_blank" rel="noreferrer"><BookOpen size={17} strokeWidth={1.5} />Docs</a>
        <a className="ap-nav" href="/#security"><ShieldCheck size={17} strokeWidth={1.5} />Audits</a>
        <NavLink className="ap-nav" to="/"><ArrowLeft size={17} strokeWidth={1.5} />Back to site</NavLink>
      </div>
      <div style={{ marginTop: 'auto' }}><NetworkCard /></div>
    </aside>
  );
}

function TopBar({ onWallet }: { onWallet: () => void }) {
  const { pathname } = useLocation();
  const { stats, account } = useStore();
  const title = TITLES[pathname] ?? 'Tide';
  return (
    <div className="ap-top">
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, letterSpacing: 'var(--ls-heading)', lineHeight: 1.2 }}>{title}</div>
      </div>
      <span className="ap-pill ap-rate" style={{ marginLeft: 'auto' }}>
        1 tideVARA = <span style={{ color: 'var(--tide-300)' }} className={stats ? undefined : 'skeleton'}>{stats ? formatRate(stats.rate) : '0.0000'}</span> VARA
      </span>
      {account ? (
        <button type="button" onClick={onWallet} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', marginLeft: stats ? 0 : 'auto' }} aria-label="Account">
          <Badge tone="accent" mono dot>{shortAddress(account.address)}</Badge>
        </button>
      ) : (
        <Button size="md" onClick={onWallet} style={{ marginLeft: stats ? 0 : 'auto' }}>Connect wallet</Button>
      )}
    </div>
  );
}

function MobileBar() {
  return (
    <nav className="ap-mobile-bar" aria-label="App">
      {NAV.map(({ to, label, icon: Icon, end }) => (
        <NavLink key={to} to={to} end={end} className="ap-nav" style={{ flex: 1 }}><Icon size={18} strokeWidth={1.5} />{label}</NavLink>
      ))}
    </nav>
  );
}

export function AppLayout() {
  const [walletOpen, setWalletOpen] = useState(false);
  const { toasts, dismiss } = useStore();
  const { pathname } = useLocation();
  useEffect(() => { document.title = `${TITLES[pathname] ?? 'Tide'} · Tide app`; }, [pathname]);
  return (
    <div className="ap-root">
      <div className="ap-bg" aria-hidden>
        <div style={{ position: 'absolute', left: '55%', top: -260, transform: 'translateX(-50%)', width: 1000, height: 520, background: 'radial-gradient(closest-side,rgba(139,140,255,.16),transparent)', filter: 'blur(26px)' }} />
        <div style={{ position: 'absolute', right: -160, bottom: -200, width: 640, height: 480, background: 'radial-gradient(closest-side,rgba(139,140,255,.10),transparent)', filter: 'blur(24px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--dot-grid)', backgroundSize: 'var(--dot-grid-size)', opacity: 0.4, maskImage: 'radial-gradient(760px 380px at 60% 0%,#000 20%,transparent)', WebkitMaskImage: 'radial-gradient(760px 380px at 60% 0%,#000 20%,transparent)' }} />
      </div>
      <Sidebar />
      <main className="ap-main">
        <TopBar onWallet={() => setWalletOpen(true)} />
        <div className="ap-body">
          <Outlet context={{ openWallet: () => setWalletOpen(true) }} />
        </div>
      </main>
      <MobileBar />
      <WalletDialog open={walletOpen} onClose={() => setWalletOpen(false)} />
      <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 120, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {toasts.map((t) => <Toast key={t.id} tone={t.tone} title={t.title} detail={t.detail} onDismiss={() => dismiss(t.id)} />)}
      </div>
    </div>
  );
}

export type AppOutlet = { openWallet: () => void };
