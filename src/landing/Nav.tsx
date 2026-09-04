import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Layers } from 'lucide-react';
import { BtnIcon } from './fx';

export function Wordmark({ size = 24, href = '/', light }: { size?: number; href?: string; light?: boolean }) {
  return (
    <Link to={href} aria-label="vaultera home" className="fx-wordmark" style={{ fontSize: size, color: light ? '#fff' : undefined }}>
      <span className="fx-wordmark-mark" style={{ width: size * 1.33, height: size * 1.33, borderRadius: size * 0.38, background: light ? '#fff' : undefined, color: light ? '#1D1D1D' : undefined }}><Layers size={size * 0.7} strokeWidth={2.2} /></span>
      vaultera
    </Link>
  );
}

const LINKS = [['/#products', 'Products'], ['/#features', 'Features'], ['/#use-cases', 'Use Cases'], ['/features', 'Product']] as const;

export function LandingNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fx-nav-wrap">
      <div className="fx-nav">
        <div className="fx-nav-in">
          <div className="fx-nav-left"><Wordmark /></div>
          <nav className="fx-nav-menu" aria-label="Primary">
            {LINKS.map(([href, label]) => href.startsWith('/#')
              ? <a key={href} className="fx-navlink" href={href}>{label}</a>
              : <NavLink key={href} className="fx-navlink" to={href}>{label}</NavLink>)}
          </nav>
          <div className="fx-nav-right">
            <BtnIcon variant="nav" to="/app">Launch app</BtnIcon>
            <button type="button" className="fx-nav-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)} />
          </div>
        </div>
        {open && (
          <div className="fx-nav-drop" role="menu">
            {LINKS.map(([href, label]) => href.startsWith('/#')
              ? <a key={href} className="fx-navlink" href={href} role="menuitem" onClick={() => setOpen(false)}>{label}</a>
              : <NavLink key={href} className="fx-navlink" to={href} role="menuitem" onClick={() => setOpen(false)}>{label}</NavLink>)}
          </div>
        )}
      </div>
    </div>
  );
}
