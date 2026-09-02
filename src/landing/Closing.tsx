import { Bento, Button } from '@/ui';
import { Sec } from './Sections';
import { Wordmark } from './Nav';

export function Parameters() {
  const tiles: [string, string, string][] = [
    ['Max LTV', '50%', 'borrow against kVARA'],
    ['Liq. threshold', '65%', 'price band before seizure'],
    ['Liq. penalty', '8%', 'bounty + insurance fund'],
    ['Utilization kink', '80%', 'rate curve turns steep'],
    ['Buffer target', '5–10%', 'of staked TVL, instant exits'],
    ['Reward fee', '10%', 'of era rewards'],
  ];
  const pillars: [string, string][] = [
    ['Insurance first', '10–15% of borrow interest fills the insurance fund before the treasury sees a token. It backstops slashes and bad debt.'],
    ['Slash defer: 7 days', 'Vara defers slashes for a week — a governance window for the fund to react before anything applies.'],
    ['Curated validators', 'Nominations spread across a screened set — commission, uptime, slash history. Never nominate blind.'],
  ];
  return (
    <Sec id="security" eyebrow="Risk, stated plainly" title="Conservative by design." sub="VARA is a young, low-liquidity asset. Parameters start tight — you can loosen later; you can't un-lose bad debt.">
      <div className="ld-params">
        {tiles.map(([k, v, s]) => (
          <Bento key={k} pad={22}>
            <div className="eyebrow" style={{ fontSize: 11 }}>{k}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 28, margin: '7px 0 3px', color: 'var(--tide-300)' }}>{v}</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-3)' }}>{s}</div>
          </Bento>
        ))}
      </div>
      <Bento pad={30} style={{ marginTop: 18 }}>
        <div className="ld-params-3">
          {pillars.map(([t, d]) => (
            <div key={t}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17 }}>{t}</div>
              <p style={{ fontSize: 13.5, color: 'var(--text-2)', marginTop: 7, lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </Bento>
    </Sec>
  );
}

export function FAQ() {
  const qs: [string, string][] = [
    ['Why kVARA and not stVARA?', 'Nobody “stakes” USDT — st would be a lie on the stable side. One brand prefix truthfully means “Vaultera\'s yield-bearing receipt” for every asset, and every token in every wallet is an ad for the protocol. gVARA and wVARA are already taken on Vara anyway.'],
    ['Where does the stable yield actually come from?', 'Borrow interest. Each vault lends into an isolated market where kVARA is the only collateral. Borrowers are leverage stakers amplifying staking yield — they pay the interest your share price accrues.'],
    ["What happens if VARA's price drops fast?", 'Positions crossing the 65% liquidation threshold are repaid by liquidators who seize kVARA at an 8% discount. Bad debt occurs only if price gaps through the band faster than bots act — which is why LTV starts at a conservative 50%.'],
    ["Why doesn't my balance go up?", 'kVARA is non-rebasing: your balance is fixed and the redemption rate rises instead. Rebasing tokens break DEX pools, bridges and lending markets; a rising rate composes with everything.'],
    ['I hold less than 50 VARA. Can I stake?', "Yes — 50 VARA is Vara's minimum nomination, so the protocol pools below-minimum deposits and nominates them together. That's the point."],
  ];
  return (
    <Sec id="faq" eyebrow="FAQ" title="Fair questions.">
      <div style={{ maxWidth: 760, marginTop: 28 }}>
        {qs.map(([q, a]) => (
          <details className="ld-faq" key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </Sec>
  );
}

export function CTABand() {
  return (
    <div className="ld-cta">
      <Bento style={{ textAlign: 'center' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--dot-grid)', backgroundSize: 'var(--dot-grid-size)', maskImage: 'radial-gradient(560px 260px at 50% 110%,#000,transparent)', WebkitMaskImage: 'radial-gradient(560px 260px at 50% 110%,#000,transparent)' }} />
        <div aria-hidden style={{ position: 'absolute', left: '50%', bottom: -160, transform: 'translateX(-50%)', width: 700, height: 340, background: 'radial-gradient(closest-side,rgba(139,140,255,.24),transparent)', filter: 'blur(14px)' }} />
        <div style={{ position: 'relative', padding: '76px 32px 80px' }}>
          <h2>Put your VARA to work.</h2>
          <p style={{ fontSize: 16, color: 'var(--text-2)', margin: '14px auto 0', maxWidth: '52ch', lineHeight: 1.65 }}>Stake in one transaction. Exit instantly or unbond natively. The rate does the rest.</p>
          <div className="ld-cta-btns">
            <Button size="xl" to="/app">Launch app</Button>
            <Button size="xl" variant="ghost" href="https://wiki.vara.network/" target="_blank" rel="noreferrer">Read the docs</Button>
          </div>
        </div>
      </Bento>
    </div>
  );
}

export function Footer() {
  const col = (t: string, ls: [string, string][]) => (
    <div key={t}>
      <div className="eyebrow" style={{ fontSize: 11, marginBottom: 14 }}>{t}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ls.map(([l, href]) => <a key={l} className="ld-link" href={href} style={{ fontSize: 13.5 }} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{l}</a>)}
      </div>
    </div>
  );
  return (
    <footer className="ld-footer">
      <div className="ld-footer-in">
        <div className="ld-foot-grid">
          <div>
            <Wordmark size={26} />
            <p style={{ fontSize: 13.5, color: 'var(--text-3)', marginTop: 12, maxWidth: '34ch', lineHeight: 1.6 }}>Liquid staking and stable yield on Vara Network. Two sides, one engine.</p>
          </div>
          {col('Protocol', [['Stake', '/app'], ['Vaults', '/app/vaults'], ['Portfolio', '/app/portfolio'], ['Insurance fund', '#security']])}
          {col('Resources', [['Docs', 'https://wiki.vara.network/'], ['Audits', '#security'], ['GitHub', 'https://github.com/gear-tech'], ['Brand', '#top']])}
          {col('Community', [['X', 'https://x.com/VaraNetwork'], ['Discord', 'https://discord.gg/x8ZeSy6S6K'], ['Telegram', 'https://t.me/VaraNetwork_Global'], ['Governance', '#faq']])}
        </div>
        <div className="ld-footer-bar">
          <span>kVARA · Vara testnet</span>
          <span>Figures shown are illustrative. Staking involves slashing and liquidation risk.</span>
          <span>© 2026 Vaultera · Built on Vara</span>
        </div>
      </div>
    </footer>
  );
}
