import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import type { Snap } from '../types';
import { getSnapsProvider } from '@/utils';

type MetaMaskContextType = {
  provider: any | null;
  installedSnap: Snap | null;
  error: Error | null;
  setInstalledSnap: (snap: Snap | null) => void;
  setError: (error: Error) => void;
  userAddress: string | null;
  setUserAddress: (address: string | null) => void;
  balance: string | null;
  setBalance: (balance: string | null) => void;
  transactions: any[];
  setTransactions: (transactions: any[]) => void;
  metagraphBalance: string | null;
  setMetagraphBalance: (balance: string | null) => void;
};

export const MetaMaskContext = createContext<MetaMaskContextType>({
  provider: null,
  installedSnap: null,
  error: null,
  userAddress: null,
  balance: null,
  transactions: [],
  metagraphBalance: null,
  setUserAddress: () => {
    /* no-op */
  },
  setInstalledSnap: () => {
    /* no-op */
  },
  setError: () => {
    /* no-op */
  },
  setBalance: () => {
    /* no-op */
  },
  setTransactions: () => {
    /* no-op */
  },
  setMetagraphBalance: () => {
    /* no-op */
  },
});

/**
 * MetaMask context provider to handle MetaMask and snap status.
 *
 * @param props - React Props.
 * @param props.children - React component to be wrapped by the Provider.
 * @returns JSX.
 */
export const MetaMaskProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<any | null>(null);
  const [installedSnap, setInstalledSnap] = useState<Snap | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [metagraphBalance, setMetagraphBalance] = useState<string | null>(null);

  useEffect(() => {
    getSnapsProvider().then(setProvider).catch(console.error);
  }, []);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(null);
      }, 10000);

      return () => {
        clearTimeout(timeout);
      };
    }

    return undefined;
  }, [error]);

  return (
    <MetaMaskContext.Provider
      value={{
        provider,
        installedSnap,
        setInstalledSnap,
        userAddress,
        setUserAddress,
        error,
        setError,
        balance,
        setBalance,
        transactions,
        setTransactions,
        metagraphBalance,
        setMetagraphBalance,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

/**
 * Utility hook to consume the MetaMask context.
 *
 * @returns The MetaMask context.
 */
export function useMetaMaskContext() {
  return useContext(MetaMaskContext);
}
