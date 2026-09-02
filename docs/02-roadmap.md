# Roadmap (self generated milestone queue)

| # | Slice | Proves | Check | Status |
|---|---|---|---|---|
| M0 | Scaffold, tokens, fonts, UI primitives ported to TSX | The design system renders in production code | `pnpm test`, `pnpm build` | green 2026-09-03 |
| M1 | Landing page, all 11 sections, responsive | The marketing site matches the kit | smoke test + build | green 2026-09-03 |
| M2 | Domain math and mock adapter | Stake and unstake numbers are exact | unit tests | green 2026-09-03 |
| M3 | App shell + Stake/Unstake screen | Core user flow end to end on the mock | component test | green 2026-09-03 |
| M4 | Vaults + Portfolio + claim unbonded | Full v1 product surface | component test | green 2026-09-03 |
| M5 | Wallet connect + testnet balance via GearAdapter | Real chain read path | manual + unit | green 2026-09-03 |
| M6 | Polish: mobile app layout, loading/error states, meta tags | Ship quality | build + review | green 2026-09-03 |

M5 note: wallet connect is real (extension API); balance reads are real only with `VITE_ADAPTER=gear`; program writes stay simulated until a program id exists.
