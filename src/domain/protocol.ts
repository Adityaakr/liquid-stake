/** Protocol constants as stated by the design kit and Vara network parameters. */
export const VARA_DECIMALS = 12;
export const ONE_VARA = 10n ** BigInt(VARA_DECIMALS);
export const STABLE_DECIMALS = 6;
export const ONE_STABLE = 10n ** BigInt(STABLE_DECIMALS);

/** Exchange rate is a fixed point number scaled by RATE_SCALE (1e9). */
export const RATE_SCALE = 1_000_000_000n;

/** Fees and parameters in basis points. */
export const INSTANT_UNSTAKE_FEE_BPS = 30n; // 0.3%
export const REWARD_FEE_BPS = 1000n; // 10% of era rewards
export const MAX_LTV_BPS = 5000n;
export const LIQ_THRESHOLD_BPS = 6500n;
export const LIQ_PENALTY_BPS = 800n;
export const UTIL_KINK_BPS = 8000n;
export const BPS = 10_000n;

export const ERA_HOURS = 12;
export const UNBONDING_DAYS = 7;
export const UNBONDING_MS = UNBONDING_DAYS * 24 * 60 * 60 * 1000;
export const MIN_NOMINATION_VARA = 50n * ONE_VARA;

export const VAULT_ASSETS = ['USDT', 'USDC'] as const;
export type VaultAsset = (typeof VAULT_ASSETS)[number];
