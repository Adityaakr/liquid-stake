# Tide Design System

Design system for **Tide** — a two-sided liquid-staking protocol on **Vara Network** (working name; the naming *system* matters more than the brand word).

## Product context

1. **Liquid staking** — stake VARA → receive **tideVARA** (value-accruing, non-rebasing; exchange rate starts at 1.0 and rises each 12h era as validator rewards compound). Mint: `tideVARA = VARA / rate`; redeem: `VARA = tideVARA × rate`. Yield is embedded in the rate — holding tideVARA *is* the position.
2. **Stable vaults** — deposit wUSDT/wUSDC → receive **tideUSDT/tideUSDC** (4626-style vault shares). Yield comes from borrow interest paid by leverage stakers ("loopers") who post tideVARA as the only accepted collateral in isolated money markets.

The flywheel: stake → tideVARA → collateral → borrow stables → buy VARA → stake again. More VARA bonded, more borrow demand, more protocol fees. One brand prefix (`tide*`) across every receipt token — jitoSOL pattern, not `stVARA` (`st` is a lie for stables; `gVARA`/`wVARA` are taken on Vara).

Key figures: exit paths = instant (~0.3% fee, buffer/DEX) or native unbond (7 days, free, full rate). Fees: 10% of era rewards, 10–15% reserve factor, 0.3% instant unstake, ~8% liquidation penalty (insurance fund first). Vara params: 12h eras, 7-day unbonding, 50 VARA min nomination (protocol pools below-min deposits), NPoS ≤1000 validators (curated set). Risk params v1: 50% max LTV, 65% liq threshold, 80% utilization kink, 5–10% buffer target. **All APY/TVL numbers in kits are illustrative.**

## Sources given

- 8 reference screenshots in `uploads/` (no codebase, Figma, or brand kit was provided):
  - "Hype" dark liquid-staking landing (×4): pill badge over 2-line hero w/ gradient keyword line, dual CTA (solid + outline), central chip motif wired to rounded-square token tiles, dot-grid texture, gradient-numeral stat cards, brand-panel sheet (Clash Grotesk, #060607/#FFFFFF, violet gradient).
  - "Davos Protocol" light marketing (×2): alternating deep/mint info cards, numbered 01/02/03 step cards, b&w photo blog grid, full-width rounded CTA band, dark footer.
  - Light app deposit screen (×1): Deposit/Withdraw tabs, big amount row, Position/APY/Potential-earning rows, full-width CTA, TVL/APY tiles, rewards-distribution timeline with milestone dots.
  - "Escher" app dashboard (×1): icon sidebar, pastel stat cards, feature cards, positions table (token/balance/TVL/ratio), wallet chip top-right.

References set the **structure and quality bar** (hero anatomy, deposit-card anatomy, app shell). Tide's identity is its own: deep abyss navy + aqua/cyan "tide" accent (on-name, adjacent to Vara's teal ecosystem green) rather than the references' violet or light themes. Say the word and I can retheme via `tokens/colors.css`.

## Type

- **Clash Display** (Fontshare CDN) — headlines, display numerals. Weights 500/600.
- **Clash Grotesk** (Fontshare CDN) — UI + body. 400/500/600. (The "Hype" reference's own face.)
- **JetBrains Mono** (Google CDN) — data: rates, addresses, params, table numerics.
- ⚠️ No font binaries were provided; families load via CDN `@import` in `tokens/fonts.css`, so the compiler indexes no local `@font-face`. Supply .woff2 files to self-host and I'll switch to local `@font-face`.

## CONTENT FUNDAMENTALS

- **Sentence case everywhere** — headlines, buttons, nav. Only token tickers (VARA, tideVARA) and tiny eyebrow labels break the rule (eyebrows are uppercase, tracked +0.14em).
- **Short declaratives, mechanism over hype.** "Stake VARA. Stay liquid." / "Yield is never paid out — it's embedded in the rate." Never "unlock the future of", "supercharge", "revolutionary".
- **Second person for the user, first-person plural sparingly.** "You deposit VARA" / "your position". The protocol is "Tide" or "the protocol", never "we believe".
- **Numbers carry the argument** — eras, fees, thresholds are stated exactly (12h eras, 7-day unbond, 0.3% fee) in mono. Honest about risk: slashing, liquidation, bad debt are named, not euphemized.
- **Token names verbatim:** `tideVARA`, `tideUSDT`, `tideUSDC` — lowercase prefix + upper ticker, never TideVara/tVARA.
- **No emoji, ever.** No exclamation marks. Questions allowed in FAQ only.
- Wordmark is lowercase **tide** in Clash Display 600.

## VISUAL FOUNDATIONS

- **Color:** plum-charcoal ink ramp (`--ink-950…600`, built around `#211C30`) under periwinkle accent `--tide-400 #A3A4FF` (`--tide-500 #8B8CFF`) with white/near-white support. One accent family. Semantic ok/warn/danger/info. Token identity tints: VARA teal (real mark), USDT muted green, USDC blue.
- **Gradients:** only white→periwinkle (`--grad-tide`, `--grad-text`) on hero keywords, primary buttons, big stat numerals, and thin rules. Card washes are near-invisible (`--grad-card`). Never rainbow, never full-bleed gradient backgrounds.
- **Backgrounds:** flat ink panels + `--dot-grid` texture patches + soft radial accent glows anchored to content (hero, section starts). No photography on dark surfaces; no illustrations were provided so none are used.
- **Cards:** `--surface-card` fill, 1px `--line-2` border, `--r-lg` 18px radius, `--shadow-card` (inset top light + deep drop). Feature cards may add `--grad-card` wash. Radii: controls 10–14px, cards 18px, hero frames 26px, pills 999.
- **Borders over shadows** for separation; shadows are for lift only. Hairlines are cool alpha-white (`--line-1/2/3`), accent border `--accent-line` marks the active/selected thing.
- **Type color:** `--text-1` headings, `--text-2` body, `--text-3` labels/captions; gradient text (`--grad-text` + background-clip) reserved for ONE keyword per screen and hero numerals.
- **Data is mono:** any exact number (rate, fee, APY, address) renders in JetBrains Mono with `--ls-num`.
- **Motion:** fades + 8–12px rises, `--ease-out`, 140/260ms; glow intensifies on hover. No bounces, no parallax. Hover = surface lightens one step (`--surface-hover`) or border brightens (`--line-3`); press = scale(.985); focus = `--focus-ring`.
- **Transparency/blur:** sticky/floating navs and dialogs only — `rgba(10,10,28,.74)` + `backdrop-filter: blur(16px)`; the landing nav is a floating capsule (18px radius, hairline border).
- **Diagrams** (flywheel, flows) are built from real UI primitives — bordered chips, mono labels, thin connector rules with glow dots — never freehand SVG illustration.

## ICONOGRAPHY

- **Icon set: [Lucide](https://lucide.dev) via CDN** (`lucide@latest` UMD, `createIcons` or inline SVG copies) — 1.5px stroke line icons, `currentColor`, sized 16/20/24. This substitutes the references' unidentifiable line-icon sets (closest visual match: thin geometric strokes). Flagging per protocol: swap in a proprietary set anytime.
- Icons are always monochrome (`--text-2` default, `--tide-400` when active/accent); never multicolor, never filled style, no emoji, no unicode-as-icon.
- **No protocol logo exists** — none was provided and none is invented. The wordmark is plain type: lowercase "tide" in Clash Display 600 (see `guidelines/cards/brand-wordmark.html`).
- Chain/asset logos (Vara, Tether, Circle) are intentionally absent — supply official SVGs to `assets/` and I'll wire them in.

## Index

- `styles.css` — global entry; imports `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `guidelines/cards/` — foundation specimen cards (Design System tab)
- `components/` — React primitives: `actions/` Button, IconButton · `display/` Card, Badge, Stat, TokenBadge, Meter · `forms/` Input, AmountField, Select, Switch, Tabs · `feedback/` Dialog, Toast, Tooltip
- `ui_kits/landing/` — marketing landing page (index.html + section JSX)
- `ui_kits/app/` — the app: Stake, Vaults, Portfolio views (index.html)
- `thumbnail.html` — homepage tile · `SKILL.md` — agent skill entry

**Intentional additions** (no source inventory existed; DeFi-specific): AmountField (token amount + MAX + fiat echo), TokenBadge, Stat, Meter (utilization/LTV). Standard primitives otherwise.
