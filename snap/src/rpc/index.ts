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
  dag4.account.loginPublicKey(myAddress);
  return dag4.account.getBalance();
};

/**
 * Create a Dogecoin P2PKH transaction and broadcast it over the network. The current
 * logic is very raw. Among other things:
 * - It's missing much error checking.
 * - It uses JavaScript's Number type, which only has so much decimal precision.
 * - The fees are calculated using Mainnet, since the API we use doesn't provide Testnet fees.
 * - The fees are subtracted from the amount to send.
 * - Probably many other bugs and issues...
 *
 * The steps are:
 * - Present a dialog for the user to confirm the transaction. This is
 * - Find enough UTXOs to cover the transfer.
 * - Create the transaction inputs.
 * - Create the transaction outputs, taking into account fees.
 * - Sign the transaction.
 * - Broadcast the transaction.
 *
 * @param transactionParams - The transaction parameters.
 * @param transactionParams.toAddress - The destination address.
 * @param transactionParams.amountInSatoshi - The amount to send, in "satoshis" i.e. DOGE * 100_000_000.
 */
// export const makeTransaction = async ({
//   toAddress,
//   amountInSatoshi,
// }: MakeTransactionParams): Promise<BroadcastTransactionResponse> => {
//   const amountInDoge = amountInSatoshi / SATOSHI_TO_DOGE;
//   const confirmationResponse = await snap.request({
//     method: 'snap_dialog',
//     params: {
//       type: 'confirmation',
//       content: panel([
//         heading('Confirm transaction'),
//         divider(),
//         text('Send the following amount in DOGE:'),
//         copyable(amountInDoge.toString()),
//         text('To the following address:'),
//         copyable(toAddress),
//       ]),
//     },
//   });

//   if (confirmationResponse !== true) {
//     throw new Error('Transaction must be approved by user');
//   }

//   const psbt = new Psbt({
//     network: dogecoinNetwork,
//   });

//   const account = await getAccount();

//   if (!account.privateKeyBytes) {
//     throw new Error('Private key is required');
//   }

//   const myAddress = await getAddress();
//   const utxos = await getUtxosForValue(myAddress, amountInSatoshi);
//   const fees = await getFees();
//   const feePerByte = fees.medium;

//   await Promise.all(
//     utxos.map(async (utxo) => {
//       const txHex = await getTransactionHex(utxo.txHash);
//       psbt.addInput({
//         hash: utxo.txHash,
//         index: utxo.index,
//         nonWitnessUtxo: Buffer.from(txHex, 'hex'),
//       });
//     }),
//   );

//   const estimatedTxSize = utxos.length * 180 + 2 * 34 + 10;
//   const fee = Math.floor(estimatedTxSize * feePerByte);

//   const totalUtxoValue = utxos.reduce(
//     (total, curr) => total + curr.value * 100_000_000,
//     0,
//   );
//   const changeValue = Math.floor(totalUtxoValue - amountInSatoshi - fee);
//   if (changeValue < 0) {
//     throw new Error('Must have enough funds for transaction + fees');
//   }

//   psbt.addOutput({
//     address: toAddress,
//     value: amountInSatoshi,
//   });

//   try {
//     psbt.addOutput({
//       address: myAddress,
//       value: changeValue,
//     });
//   } catch (err) {
//     console.error('error while adding output', err);
//   }

//   psbt.signAllInputs(
//     ECPair.fromPrivateKey(Buffer.from(account.privateKeyBytes)),
//   );

//   const txHex = psbt.finalizeAllInputs().extractTransaction(true).toHex();
//   const txResponse = await broadcastSignedTransaction(txHex);
//   return txResponse;
// };
