import { dag4 } from '@stardust-collective/dag4';

export const sendTransaction = async (pk: string, toAddress: string, amount: number, fee: number) => {
  dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
  });

  dag4.account.loginPrivateKey(pk);

  await dag4.account.transferDag(toAddress, amount, fee);
};
