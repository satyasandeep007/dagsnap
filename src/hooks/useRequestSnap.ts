import { defaultSnapOrigin } from '@/config';
import type { Snap } from '@/types';
import { useMetaMaskContext } from './MetamaskContext';
import { useRequest } from './useRequest';

/**
 * Utility hook to wrap the `wallet_requestSnaps` method.
 *
 * @param snapId - The requested Snap ID. Defaults to the snap ID specified in the
 * config.
 * @param version - The requested version.
 * @returns The `wallet_requestSnaps` wrapper.
 */
export const useRequestSnap = (snapId = defaultSnapOrigin, version?: string) => {
  const request = useRequest();
  const { setInstalledSnap, setUserAddress, setBalance, setTransactions } = useMetaMaskContext();

  /**
   * Request the Snap.
   */
  const requestSnap = async () => {
    const snaps = (await request({
      method: 'wallet_requestSnaps',
      params: {
        [snapId]: version ? { version } : {},
      },
    })) as Record<string, Snap>;

    // Updates the `installedSnap` context variable since we just installed the Snap.
    setInstalledSnap(snaps?.[snapId] ?? null);
  };

  const disconnectSnap = async () => {
    // await request({
    //   method: 'wallet_revokePermissions',
    //   params: {
    //     [snapId]: {}, // You may need to adjust this based on your Snap's requirements
    //   },
    // });

    // Optionally clear the installedSnap context variable
    setInstalledSnap(null);
    setUserAddress(null);
    setBalance(null);
    setTransactions([]);
  };

  return { requestSnap, disconnectSnap };
};
