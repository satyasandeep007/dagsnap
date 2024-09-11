'use client';

import React, { ReactNode } from 'react';
import { MetaMaskProvider } from '@/hooks/MetamaskContext';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: any): any {
  return <MetaMaskProvider>{children}</MetaMaskProvider>;
}
