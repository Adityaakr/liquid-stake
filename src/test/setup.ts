import '@testing-library/jest-dom/vitest';

// jsdom lacks ResizeObserver; the Fit helper uses it for pixel-faithful illustrations.
class RO { observe() {} unobserve() {} disconnect() {} }
(globalThis as unknown as { ResizeObserver: typeof RO }).ResizeObserver = RO;
if (!('crypto' in globalThis) || !globalThis.crypto.getRandomValues) {
  Object.defineProperty(globalThis, 'crypto', { value: { getRandomValues: (a: Uint8Array) => { for (let i = 0; i < a.length; i++) a[i] = Math.floor(Math.random() * 256); return a; } } });
}
