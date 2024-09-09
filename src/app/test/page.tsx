'use client';

import { ConnectButton, InstallFlaskButton, ReconnectButton, SendHelloButton } from '@/utils/ui/Buttons';
import { defaultSnapOrigin } from '@/config';
import { useMetaMask, useInvokeSnap, useMetaMaskContext, useRequestSnap } from '@/hooks';
import { isLocalSnap, shouldDisplayReconnectButton } from '@/utils';
import { useState } from 'react';

const Card = ({ content, disabled, fullWidth }: any) => (
  <div className={`bg-white shadow-md rounded-lg p-6 ${fullWidth ? 'w-full' : 'w-64'} ${disabled ? 'opacity-50' : ''}`}>
    <h2 className="text-xl font-bold mb-4">{content.title}</h2>
    <p className="mb-4">{content.description}</p>
    {content.button}
  </div>
);

const Index = () => {
  const { error, provider }: any = useMetaMaskContext();
  const { isFlask, snapsDetected, installedSnap } = useMetaMask();

  const requestSnap = useRequestSnap();
  const invokeSnap = useInvokeSnap(defaultSnapOrigin);
  const [userAddress, setUserAddress]: any = useState<string | null>(null);

  const isMetaMaskReady = isLocalSnap(defaultSnapOrigin) ? true : snapsDetected;

  const handleSendHelloClick = async () => {
    await invokeSnap({
      method: 'dag_makeTransaction',
      params: { toAddress: '0x5B4d77e199FE8e5090009C72d2a5581C74FEbE89', amount: 1 },
    });
  };

  async function getAccount() {
    const account = await invokeSnap({ method: 'dag_getAddress' });

    setUserAddress(account);
    return account;
  }

  const sendCrypto = async (recipientAddress: string, amountInWei: string) => {
    if (!userAddress) {
      console.error('User address not available. Please connect your wallet first.');
      return;
    }

    if (!recipientAddress || !amountInWei) {
      console.error('Recipient address and amount are required.');
      return;
    }

    try {
      const txHash = await provider.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: userAddress,
            to: recipientAddress,
            value: amountInWei,
            gasLimit: '0x5028',
            maxPriorityFeePerGas: '0x3b9aca00',
            maxFeePerGas: '0x2540be400',
          },
        ],
      });
      console.log('Transaction sent:', txHash);
      return txHash;
    } catch (error: any) {
      if (error.code === 4001) {
        console.log('Transaction rejected by user');
      } else {
        console.error('Error sending transaction:', error);
      }
      throw error;
    }
  };

  // Example usage in a button click handler:
  const handleSendCryptoClick = async () => {
    try {
      const recipientAddress = '0x5B4d77e199FE8e5090009C72d2a5581C74FEbE89'; // Replace with actual recipient address
      const amountInWei = '0x5AF3107A4000';
      const txHash = await sendCrypto(recipientAddress, amountInWei);
      if (txHash) {
        console.log('Transaction sent:', txHash);
      }
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  };

  const handleHelloClick = async () => {
    try {
      const result = await invokeSnap({
        method: 'hello',
      });
      console.log('Snap hello result:', result);
    } catch (error) {
      console.error('Error calling hello method:', error);
    }
  };

  return (
    <div className="flex flex-col items-center flex-1 mt-[7.6rem] mb-[7.6rem] sm:px-6 sm:mt-8 sm:mb-8 sm:w-auto">
      <h1 className="mt-0 mb-6 text-center">
        Welcome to <span className="text-primary">template-snap</span>
      </h1>
      <p className="text-lg font-medium mt-0 mb-0 sm:text-base">
        Get started by editing <code>src/index.tsx</code>
      </p>
      <div className="flex flex-row flex-wrap justify-between max-w-[64.8rem] w-full h-full mt-6">
        {error && (
          <div className="bg-error-muted border border-error text-error-alternative rounded p-6 mb-6 mt-6 max-w-[60rem] w-full sm:p-4 sm:my-3 sm:max-w-full">
            <b>An error happened:</b> {error.message}
          </div>
        )}
        {!isMetaMaskReady && (
          <Card
            content={{
              title: 'Install',
              description:
                'Snaps is pre-release software only available in MetaMask Flask, a canary distribution for developers with access to upcoming features.',
              button: <InstallFlaskButton />,
            }}
            fullWidth
          />
        )}

        {userAddress && (
          <div className="bg-success-muted border border-success text-success-alternative rounded p-6 mb-6 mt-6 max-w-[60rem] w-full sm:p-4 sm:my-3 sm:max-w-full">
            <b>User Address:</b> {userAddress}
          </div>
        )}

        {!installedSnap && (
          <Card
            content={{
              title: 'Connect',
              description: 'Get started by connecting to and installing the example snap.',
              button: <ConnectButton onClick={requestSnap} disabled={!isMetaMaskReady} />,
            }}
            disabled={!isMetaMaskReady}
          />
        )}
        {shouldDisplayReconnectButton(installedSnap) && (
          <Card
            content={{
              title: 'Reconnect',
              description:
                'While connected to a local running snap this button will always be displayed in order to update the snap if a change is made.',
              button: <ReconnectButton onClick={requestSnap} disabled={!installedSnap} />,
            }}
            disabled={!installedSnap}
          />
        )}
        <Card
          content={{
            title: 'Send Hello message',
            description: 'Display a custom message within a confirmation screen in MetaMask.',
            button: <SendHelloButton onClick={handleSendHelloClick} disabled={!installedSnap} />,
          }}
          disabled={!installedSnap}
          fullWidth={isMetaMaskReady && Boolean(installedSnap) && !shouldDisplayReconnectButton(installedSnap)}
        />
        <Card
          content={{
            title: 'Get User Address',
            description: "Retrieve the user's Ethereum address using Snaps.",
            button: (
              <SendHelloButton onClick={getAccount} disabled={!installedSnap}>
                Get Address
              </SendHelloButton>
            ),
          }}
          disabled={!installedSnap}
        />

        <Card
          content={{
            title: 'Send Crypto',
            description: 'Send crypto to a recipient address using Snaps.',
            button: (
              <SendHelloButton onClick={handleSendCryptoClick} disabled={!installedSnap}>
                Send Crypto
              </SendHelloButton>
            ),
          }}
          disabled={!installedSnap}
        />
        <Card
          content={{
            title: 'Show Snap Dialog',
            description: 'Display a dialog using the snap_dialog method.',
            button: (
              <SendHelloButton onClick={handleHelloClick} disabled={!installedSnap}>
                Show Dialog
              </SendHelloButton>
            ),
          }}
          disabled={!installedSnap}
        />
        <div className="bg-background-alternative border border-border text-text-alternative rounded p-6 mt-6 max-w-[60rem] w-full sm:mt-3 sm:p-4">
          <p className="m-0">
            Please note that the <b>snap.manifest.json</b> and <b>package.json</b> must be located in the server root
            directory and the bundle must be hosted at the location specified by the location field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
