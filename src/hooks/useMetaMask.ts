import { useEffect, useState } from 'react';

import { defaultSnapOrigin } from '@/config';
import type { GetSnapsResponse } from '@/types';
import { useMetaMaskContext } from './MetamaskContext';
import { useRequest } from './useRequest';
import { useInvokeSnap } from './useInvokeSnap';

/**
 * A Hook to retrieve useful data from MetaMask.
 * @returns The informations.
 */
export const useMetaMask = () => {
  const { provider, setInstalledSnap, installedSnap, setUserAddress } = useMetaMaskContext();
  const request = useRequest();

  const [isFlask, setIsFlask] = useState(false);
  const invokeSnap = useInvokeSnap(defaultSnapOrigin);

  const snapsDetected = provider !== null;

  /**
   * Detect if the version of MetaMask is Flask.
   */
  const detectFlask = async () => {
    const clientVersion = await request({
      method: 'web3_clientVersion',
    });

    const isFlaskDetected = (clientVersion as string[])?.includes('flask');

    setIsFlask(isFlaskDetected);
  };

  /**
   * Get the Snap informations from MetaMask.
   */
  const getSnap = async () => {
    const snaps = (await request({
      method: 'wallet_getSnaps',
    })) as GetSnapsResponse;

    setInstalledSnap(snaps[defaultSnapOrigin] ?? null);
  };

  const getAccount = async () => {
    const account = await invokeSnap({ method: 'dag_getAddress' });
    setUserAddress(account as string);
    return account;
  };

  useEffect(() => {
    const detect = async () => {
      if (provider) {
        await detectFlask();
        await getSnap();
        await getAccount();
      }
    };

    detect().catch(console.error);
  }, [provider]);

  return { isFlask, snapsDetected, installedSnap, getSnap, getAccount };
};
