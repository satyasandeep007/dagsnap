import { dag4 } from '@stardust-collective/dag4';
import { add0x, remove0x } from '@metamask/utils';
import { copyable, divider, heading, panel, text } from '@metamask/snaps-ui';
import { getAccount } from './private-key';

/**
 * This demo wallet uses a single account/address.
 */
export const getAddress = async (): Promise<string> => {
  const account = await getAccount();
  dag4.account.loginPrivateKey(remove0x(account));
  const address = dag4.account.address;
  return address;
};

export const getTransactions = async (): Promise<any[]> => {
  const myAddress = await getAddress();
  dag4.account.loginPublicKey(myAddress);
  return dag4.account.getTransactions(10);
};

export const getBalance = async (): Promise<number> => {
  const myAddress = await getAddress();
  console.log(
    dag4.account.getBalanceFor(myAddress),
    'dag4.account.getBalanceFor(myAddress);',
  );

  return dag4.account.getBalanceFor(myAddress);
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

  const myAddress = await getAddress();
  dag4.account.loginPrivateKey(remove0x(account));
  const tx = await dag4.account.transferDag(toAddress, amount, 0);

  return tx;
};
