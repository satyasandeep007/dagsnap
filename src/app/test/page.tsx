'use client';

import {
  ConnectButton,
  InstallFlaskButton,
  ReconnectButton,
  SendHelloButton,
} from '@/utils/ui/Buttons';
import { defaultSnapOrigin } from '@/config';
import {
  useMetaMask,
  useInvokeSnap,
  useMetaMaskContext,
  useRequestSnap,
} from '@/hooks';
import { isLocalSnap, shouldDisplayReconnectButton } from '@/utils';
import { useState } from 'react';

const Card = ({ content, disabled, fullWidth }: any) => (
  <div
    className={`bg-white shadow-md rounded-lg p-6 ${
      fullWidth ? 'w-full' : 'w-64'
    } ${disabled ? 'opacity-50' : ''}`}
  >
    <h2 className="text-xl font-bold mb-4">{content.title}</h2>
    <p className="mb-4">{content.description}</p>
    {content.button}
  </div>
);

const Index = () => {
  const { error, provider }: any = useMetaMaskContext();
  const { isFlask, snapsDetected, installedSnap } = useMetaMask();
  console.log(isFlask, 'isFlask');

  const requestSnap = useRequestSnap();
  const invokeSnap = useInvokeSnap();
  const [userAddress, setUserAddress]: any = useState<string | null>(null);

  const isMetaMaskReady = isLocalSnap(defaultSnapOrigin) ? true : snapsDetected;

  const handleSendHelloClick = async () => {
    await invokeSnap({ method: 'hello' });
  };

  const handleGetAccountClick = async () => {
    try {
      const response = await invokeSnap({ method: 'getAccount' });
      setUserAddress(response);
    } catch (error) {
      console.error('Error getting account:', error);
    }
  };

  async function getAccount() {
    const accounts = await provider // Or window.ethereum if you don't support EIP-6963.
      .request({ method: 'eth_requestAccounts' })
      .catch((err: any) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error.
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    const account = accounts[0];
    console.log(account, 'account');

    setUserAddress(account);
    return account;
  }

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
              description:
                'Get started by connecting to and installing the example snap.',
              button: (
                <ConnectButton
                  onClick={requestSnap}
                  disabled={!isMetaMaskReady}
                />
              ),
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
              button: (
                <ReconnectButton
                  onClick={requestSnap}
                  disabled={!installedSnap}
                />
              ),
            }}
            disabled={!installedSnap}
          />
        )}
        <Card
          content={{
            title: 'Send Hello message',
            description:
              'Display a custom message within a confirmation screen in MetaMask.',
            button: (
              <SendHelloButton
                onClick={handleSendHelloClick}
                disabled={!installedSnap}
              />
            ),
          }}
          disabled={!installedSnap}
          fullWidth={
            isMetaMaskReady &&
            Boolean(installedSnap) &&
            !shouldDisplayReconnectButton(installedSnap)
          }
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

        <div className="bg-background-alternative border border-border text-text-alternative rounded p-6 mt-6 max-w-[60rem] w-full sm:mt-3 sm:p-4">
          <p className="m-0">
            Please note that the <b>snap.manifest.json</b> and{' '}
            <b>package.json</b> must be located in the server root directory and
            the bundle must be hosted at the location specified by the location
            field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
