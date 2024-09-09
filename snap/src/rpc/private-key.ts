import { BIP44Node, getBIP44AddressKeyDeriver } from '@metamask/key-tree';

/**
 * Derive the single account we're using for this snap.
 * The path of the account is m/44'/1'/0'/0/0.
 */
export const getAccount = async (): Promise<BIP44Node> => {
  const dagTestnetNode = await snap.request({
    method: 'snap_getBip44Entropy',
    params: {
      coinType: 1, // 1 is for all Testnets
    },
  });

  const deriveDagTestnetPrivateKey = await getBIP44AddressKeyDeriver(
    dagTestnetNode,
  );

  return deriveDagTestnetPrivateKey(0);
};
