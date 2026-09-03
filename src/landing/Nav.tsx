import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button, IconButton } from '@/ui';

export function Wordmark({ size = 24, color = 'var(--text-1)', href = '#top' }: { size?: number; color?: string; href?: string }) {
  return (
    <a href={href} aria-label="vaultera home" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, letterSpacing: '-0.02em', color, textDecoration: 'none', lineHeight: 1 }}>
      vaultera
    </a>
  );
}

const LINKS = [['#how', 'Features'], ['#tokens', 'Tokens'], ['#security', 'Security'], ['#faq', 'FAQ']] as const;

export function LandingNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="ld-nav-wrap">
      <div className="ld-nav">
        <Wordmark />
        <nav aria-label="Primary">
          {LINKS.map(([href, label]) => (
            <a key={href} className="ld-link" href={href}>{label}</a>
          ))}
        </nav>
        <span className="ld-nav-auth">
          <Button size="lg" variant="secondary" to="/app" style={{ borderRadius: 10, background: '#2A2440' }}>Log in</Button>
          <Button size="lg" to="/app" style={{ borderRadius: 10 }}>Sign up</Button>
        </span>
        <IconButton className="ld-nav-menu" label={open ? 'Close menu' : 'Open menu'} variant="outline" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </IconButton>
      </div>
      {open && (
        <div className="ld-nav-drop" role="menu">
          {LINKS.map(([href, label]) => (
            <a key={href} className="ld-link" href={href} onClick={() => setOpen(false)} role="menuitem">{label}</a>
          ))}
          <Button size="lg" to="/app" block style={{ borderRadius: 10, marginTop: 6 }}>Go to stake</Button>
        </div>
      )}
    </div>
  );
}
