import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';
import { Box, Text, Bold } from '@metamask/snaps-sdk/jsx';
import {
  getAddress,
  getBalance,
  getMetagraphBalance,
  getTransactions,
  makeTransaction,
} from './rpc';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  switch (request.method) {
    case 'hello':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: (
            <Box>
              <Text>
                Hello, <Bold>{origin}</Bold>!
              </Text>
              <Text>
                This custom confirmation is just for display purposes.
              </Text>
              <Text>
                But you can edit the snap source code to make it do something,
                if you want to!
              </Text>
            </Box>
          ),
        },
      });
    case 'dag_getAddress':
      return getAddress();

    case 'dag_getTransactions':
      return getTransactions();

    case 'dag_getBalance':
      return getBalance();

    case 'dag_makeTransaction':
      // Check if the params are valid
      return makeTransaction(request.params);

    case 'dag_getMetagraphBalance':
      return getMetagraphBalance();

    default:
      throw new Error('Method not found.');
  }
};
