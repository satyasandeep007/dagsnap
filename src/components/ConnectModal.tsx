import { useRequestSnap } from '@/hooks/useRequestSnap';
import React, { useState, useEffect } from 'react';
import { isLocalSnap, shouldDisplayReconnectButton } from '@/utils';
import { defaultSnapOrigin } from '@/config';
import { useMetaMask } from '@/hooks/useMetaMask';
import { useMetaMaskContext } from '@/hooks/MetamaskContext';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal: React.FC<ConnectModalProps> = ({ onClose }) => {
  const { requestSnap } = useRequestSnap();

  const { snapsDetected, installedSnap, getAccount } = useMetaMask();
  const [currentStep, setCurrentStep] = useState(1);
  const { userAddress } = useMetaMaskContext();

  const isMetaMaskReady = isLocalSnap(defaultSnapOrigin) ? true : snapsDetected;

  const connectToMetaMask = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Connecting to MetaMask...');
    await requestSnap();
    setCurrentStep(2);
  };

  useEffect(() => {
    if (installedSnap) {
      setCurrentStep(2);
    }
  }, [installedSnap]);

  const handleGetAccount = async () => {
    await getAccount();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[22rem] h-[30rem] shadow-xl">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center">
            {[1, 2].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 ${
                    step < currentStep
                      ? 'bg-green-500 text-white'
                      : step === currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  } rounded-full flex items-center justify-center text-sm font-bold mb-1`}
                >
                  {step}
                </div>
                <div className={`text-xs ${step === currentStep ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                  {step === 1 ? 'Connect' : 'Get Address'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentStep === 1 && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2 text-center">Connect to MetaMask</h2>
            <p className="text-gray-600 mb-4 text-center text-sm">Connect your MetaMask wallet to continue.</p>
            <button
              className={`w-full py-3 rounded-lg flex items-center justify-center font-medium ${
                isMetaMaskReady
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={connectToMetaMask}
              disabled={!isMetaMaskReady}
            >
              <svg className="w-5 h-5 mr-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor"></svg>
              {shouldDisplayReconnectButton(installedSnap) ? 'Reconnect to MetaMask' : 'Connect to MetaMask'}
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2 text-center">Get Address</h2>
            <p className="text-gray-600 mb-4 text-center text-sm">Retrieve your DAG address from the DAGsnap.</p>
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center font-medium hover:bg-blue-700"
              onClick={handleGetAccount}
            >
              Get Address
            </button>
            {userAddress && (
              <div className="mt-4 p-2 bg-white rounded border border-gray-200">
                <p className="text-gray-700 text-sm break-all">{userAddress}</p>
              </div>
            )}
          </div>
        )}

        <a
          href="https://docs.metamask.io/snaps/#what-is-snaps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 text-sm block text-center"
        >
          What are Snaps?
        </a>
      </div>
    </div>
  );
};

export default ConnectModal;
