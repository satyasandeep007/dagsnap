import { BIP44Node, getBIP44AddressKeyDeriver } from '@metamask/key-tree';

/**
 * Derive the single account we're using for this snap.
 * The path of the account is m/44'/1'/0'/0/0.
 */
export const getAccount = async (): Promise<any> => {
  const dagTestnetNode = await snap.request({
    method: 'snap_getEntropy',
    params: {
      version: 1,
      salt: 'foo', // Optional.
    },
  });

  return dagTestnetNode;
};
