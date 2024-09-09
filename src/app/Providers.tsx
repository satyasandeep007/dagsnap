'use client';

import { MetaMaskProvider } from '@/hooks';

export function Providers({ children }: { children: React.ReactNode }) {
  return <MetaMaskProvider>{children}</MetaMaskProvider>;
}
