/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_VARA_TESTNET_RPC?: string;
  readonly VITE_VARA_MAINNET_RPC?: string;
  readonly VITE_ADAPTER?: 'mock' | 'gear';
  readonly VITE_TIDE_PROGRAM_ID?: string;
}
interface ImportMeta { readonly env: ImportMetaEnv }
