import type { VaultAsset } from '@/domain/protocol';

export type NetworkId = 'testnet' | 'mainnet';

export type ProtocolStats = {
  /** tideVARA -> VARA exchange rate, scaled 1e9 */
  rate: bigint;
  stakeApyBps: bigint;
  vaultApyBps: Record<VaultAsset, bigint>;
  vaultSharePrice: Record<VaultAsset, bigint>;
  vaultTvlUsd: Record<VaultAsset, number>;
  vaultUtilizationBps: Record<VaultAsset, bigint>;
  tvlUsd: number;
  totalStakedVara: bigint;
  bufferBps: bigint;
  era: number;
  eraEndsAt: number;
  /** last three eras' rates for the compound timeline */
  rateHistory: { era: number; rate: bigint }[];
  varaPriceUsd: number;
};

export type Balances = {
  VARA: bigint;
  tideVARA: bigint;
  wUSDT: bigint;
  wUSDC: bigint;
  tideUSDT: bigint;
  tideUSDC: bigint;
};

export type UnbondEntry = { id: string; amountVara: bigint; startedAt: number; claimableAt: number };

export type TxResult = { hash: string; blockNumber?: number };

export type TxStage = 'idle' | 'broadcast' | 'finalized' | 'error';

export type Account = { address: string; name?: string; source: string };

export class ChainError extends Error {
  constructor(message: string, readonly code: 'NO_WALLET' | 'REJECTED' | 'INSUFFICIENT' | 'NOT_DEPLOYED' | 'RPC' | 'UNKNOWN' = 'UNKNOWN') {
    super(message);
    this.name = 'ChainError';
  }
}

/**
 * Everything the UI needs from the protocol. The mock implements the kit semantics exactly;
 * the Gear implementation talks to Vara and delegates to a Sails program once one is configured.
 */
export interface StakingAdapter {
  readonly kind: 'mock' | 'gear';
  readonly network: NetworkId;
  /** true when program writes are simulated rather than sent on chain */
  readonly simulated: boolean;
  getStats(): Promise<ProtocolStats>;
  getBalances(address: string): Promise<Balances>;
  getUnbonding(address: string): Promise<UnbondEntry[]>;
  stake(address: string, vara: bigint): Promise<TxResult>;
  unstakeInstant(address: string, tide: bigint): Promise<TxResult>;
  unstakeNative(address: string, tide: bigint): Promise<TxResult>;
  claimUnbonded(address: string, id: string): Promise<TxResult>;
  depositVault(address: string, asset: VaultAsset, amount: bigint): Promise<TxResult>;
  /** Subscribe to stat changes (era ticks). Returns unsubscribe. */
  subscribe(cb: () => void): () => void;
  /** Release sockets and listeners. Called when the adapter is replaced. */
  dispose(): Promise<void>;
}
