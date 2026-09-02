# vaultera

Liquid staking on Vara Network. Stake VARA, receive kVARA, exit instantly or unbond natively.

Two surfaces in one Vite app:

- `/` marketing site, built from the Vaultera design kit in `design/`
- `/app` the product: stake and unstake, stable vaults, portfolio, unbonding claims

## Run

```sh
pnpm install
pnpm dev          # http://localhost:5173
pnpm test         # vitest, 26 tests
pnpm build        # tsc + vite build -> dist/
pnpm preview
node scripts/screenshots.mjs   # Playwright screenshots of every screen into ./screenshots
```

## Configuration

Copy `.env.example` to `.env`. The app targets Vara mainnet; there is no testnet mode.

| Variable | Default | Meaning |
|---|---|---|
| `VITE_VARA_RPC` | `wss://rpc.vara.network` | Vara mainnet RPC. Point it at your own node if you run one. |
| `VITE_ADAPTER` | `gear` | `gear` reads native VARA balances from Vara mainnet. `mock` runs a fully simulated protocol with no chain access. |
| `VITE_VAULTERA_PROGRAM_ID` | empty | Sails program id. Until it is set, program writes are simulated and the UI shows a "simulation" badge. |

## Layout

```
design/        imported design kit (reference only, do not edit)
docs/          architecture decision and roadmap
src/styles     tokens.css (verbatim from the kit) and global.css
src/ui         design system primitives ported to TSX
src/landing    marketing page sections
src/app        app shell and screens
src/domain     protocol constants, bigint math, formatting (unit tested)
src/chain      StakingAdapter interface, MockAdapter, GearAdapter, wallet, store
```

## Protocol semantics

All amounts are bigint in base units (VARA has 12 decimals, stables 6). The exchange rate is a bigint scaled by 1e9.

- mint: `kVARA = VARA / rate`
- redeem: `VARA = kVARA × rate`
- instant exit: redeem minus 0.3%
- native exit: full rate, claimable after 7 days
- vault shares: 4626 style, `shares = assets / sharePrice`

Figures in the simulation are illustrative.
