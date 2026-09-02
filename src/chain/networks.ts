import type { NetworkId } from './types';

export const NETWORKS: Record<NetworkId, { label: string; rpc: string; ss58: number; explorer: string }> = {
  testnet: {
    label: 'Vara testnet',
    rpc: import.meta.env.VITE_VARA_TESTNET_RPC ?? 'wss://testnet.vara.network',
    ss58: 137,
    explorer: 'https://vara.subscan.io',
  },
  mainnet: {
    label: 'Vara mainnet',
    rpc: import.meta.env.VITE_VARA_MAINNET_RPC ?? 'wss://rpc.vara.network',
    ss58: 137,
    explorer: 'https://vara.subscan.io',
  },
};

export const DEFAULT_NETWORK: NetworkId = 'testnet';
