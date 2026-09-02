# Tide project model

Repo: liquid staking frontend for Vara Network. Brand "tide", tokens tideVARA/tideUSDT/tideUSDC.
Stack: Vite 8, React 19, TS 5.9, react-router 8, Vitest 4, pnpm. Design kit reference lives in
`design/` (imported from Claude Design project f6b24684, read only; do not edit).

## Invariants
- Design tokens in `src/styles/tokens.css` are copied verbatim from `design/tokens/*.css`.
- All exact numbers render in JetBrains Mono (`--font-mono`).
- Sentence case everywhere; no emoji; token tickers verbatim.
- Amounts are bigint with 12 decimals (VARA planck). Rate is a bigint scaled by 1e9.
- Never work on `main`; branch `feat/tide-v1` is the v1 branch.
- Commit only when asked.

## Decision log
- 2026-09-03: Vite SPA over Next.js (docs/01-architecture.md).
- 2026-09-03: MockAdapter default; GearAdapter reads real balances, program calls gated by env.

## Verified 2026-09-03 (v1 build)
- `pnpm typecheck` clean, `pnpm test` 26/26, `pnpm build` ok (index 366 KB, chain chunk 283 KB, lazy).
- Screens verified via `scripts/screenshots.mjs` (Playwright, chromium from ~/Library/Caches/ms-playwright).
- Lesson: DesignSync get_file dumps base64 PNGs into context; extract large files from the persisted
  tool-results directory and the session jsonl instead of re-fetching (see scratchpad extract.mjs pattern).
- Lesson: Vite 8 (rolldown) rejects the object form of `manualChunks`; use the function form.
- Lesson: `busy` UI state must exclude the `finalized` tx stage or inputs stay disabled for the
  post-tx timeout (caught by the unstake screen test).

## Retro 2026-09-03 (v1 shipped on feat/tide-v1, uncommitted)
Predicted: 7 milestones, ~12-18 agent runs. Actual: all 7 slices built in one pass by the orchestrator,
2 reviewer agents (design QA, adversarial code) found 15 + 12 issues; 24 fixed, rest recorded below.
Final: lint clean, tsc clean, 33 tests, build ok, Playwright screenshots of 6 screens with zero page errors.

Fixed from review: app card variant (24px, kit wash, 6-dot stars); no entrance animation or shimmer;
1.5px icon strokes; kit-exact stake rows; mock bigint persistence bug; per-address write lock;
tx idle-timer race + in-flight guard; refresh sequence token; comma paste normalization; malformed
remembered-account guard + route errorElement; statsError surfaced; dialog focus trap/restore.

Not fixed (recorded): gradient text appears more than once per screen (inherited from kit JSX);
Tabs lacks arrow-key navigation and tabpanel wiring; 'Your shares' row on vault cards is an addition
to the kit; GearAdapter program reads are stubbed until a Sails IDL exists.
