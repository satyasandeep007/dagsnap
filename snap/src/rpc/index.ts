import { dag4 } from '@stardust-collective/dag4';
import { add0x, remove0x } from '@metamask/utils';
import { copyable, divider, heading, panel, text } from '@metamask/snaps-ui';
import { getAccount } from './private-key';
import { getDagTransactionsApi, getDagBalanceApi } from './util';

export const getAddress = async (): Promise<string> => {
  const account = await getAccount();
  dag4.account.loginPrivateKey(remove0x(account));
  const address = dag4.account.address;
  return address;
};

export const getTransactions = async (): Promise<any[]> => {
  await dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
    beUrl: 'https://be-testnet.constellationnetwork.io/',
    l0Url: 'https://l0-lb-testnet.constellationnetwork.io/',
    l1Url: 'https://l1-lb-testnet.constellationnetwork.io/',
  });
  const myAddress = await getAddress();
  dag4.account.loginPublicKey(myAddress);
  // return dag4.account.getTransactions(100);
  return getDagTransactionsApi(myAddress);
};

export const getBalance = async (): Promise<number> => {
  await dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
    beUrl: 'https://be-testnet.constellationnetwork.io/',
    l0Url: 'https://l0-lb-testnet.constellationnetwork.io/',
    l1Url: 'https://l1-lb-testnet.constellationnetwork.io/',
  });
  const myAddress = await getAddress();
  dag4.account.loginPublicKey(myAddress);
  // return dag4.account.getBalance();
  return getDagBalanceApi(myAddress);
};

export const makeTransaction = async ({
  toAddress,
  amount,
}: any): Promise<any> => {
  const confirmationResponse = await snap.request({
    method: 'snap_dialog',
    params: {
      type: 'confirmation',
      content: panel([
        heading('Confirm transaction'),
        divider(),
        text('Send the following amount in DOGE:'),
        copyable(amount.toString()),
        text('To the following address:'),
        copyable(toAddress),
      ]),
    },
  });

  if (confirmationResponse !== true) {
    throw new Error('Transaction must be approved by user');
  }

  const account = await getAccount();

  if (!account) {
    throw new Error('Private key is required');
  }

  dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
  });
  dag4.account.loginPrivateKey(remove0x(account));
  const tx = await dag4.account.transferDag(toAddress, amount, 0);

  return tx;
};
