import { useRequestSnap } from '@/hooks/useRequestSnap';
import React, { useState, useEffect } from 'react';
import { isLocalSnap, shouldDisplayReconnectButton } from '@/utils';
import { defaultSnapOrigin } from '@/config';
import { useMetaMask } from '@/hooks/useMetaMask';
import { useMetaMaskContext } from '@/hooks/MetamaskContext';
import Image from 'next/image';
import DagLogo from '@/images/dag_modal.svg';
import MetamaskLogo from '@/images/metamask_modal.svg';
import MetamaskMainLogo from '@/images/metamask.svg';
import ArrowModal from '@/images/arrow_modal.svg';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal: React.FC<ConnectModalProps> = ({ onClose }) => {
  const { requestSnap } = useRequestSnap();

  const { snapsDetected, installedSnap, getAccount } = useMetaMask();
  const [currentStep, setCurrentStep] = useState(1);
  const { userAddress } = useMetaMaskContext();
  const [isCopied, setIsCopied] = useState(false);

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
    if (!userAddress) {
      await getAccount();
    } else {
      await navigator.clipboard.writeText(userAddress);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-indigo-50 rounded-lg p-6 w-[26rem] shadow-xl">
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

        <div className="flex items-center justify-center space-x-2 mb-12">
          {/* {[1, 2].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                  step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
              {step === 1 && (
                <div className="w-3 h-0.5 bg-gray-200 mx-1">
                  <div
                    className={`h-full bg-blue-600 ${currentStep > 1 ? 'w-full' : 'w-0'} transition-all duration-300`}
                  ></div>
                </div>
              )}
            </div>
          ))} */}
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <div className="w-24 h-24   rounded-full flex items-center justify-center">
            <Image src={DagLogo} alt="dag" width={100} height={100} />
          </div>
          <div className="w-6 h-0.5  ">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.94982 9.19239L2.8285 11.3137C1.2664 12.8758 1.2664 15.4085 2.8285 16.9706C4.39059 18.5327 6.92325 18.5327 8.48535 16.9706L11.3138 14.1421C12.8759 12.58 12.8759 10.0474 11.3138 8.48529C11.3138 8.48528 11.3138 8.48528 11.3138 8.48527L10.2531 9.54593C10.2531 9.54594 10.2531 9.54594 10.2531 9.54595C11.2294 10.5223 11.2294 12.1052 10.2531 13.0815L7.42469 15.9099C6.44838 16.8862 4.86547 16.8862 3.88916 15.9099C2.91285 14.9336 2.91285 13.3507 3.88916 12.3744L6.01048 10.2531L4.94982 9.19239Z"
                fill="#323F49"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7885 9.54594L15.9099 7.42462C16.8862 6.44831 16.8862 4.8654 15.9099 3.88909C14.9335 2.91278 13.3506 2.91278 12.3743 3.88909L9.5459 6.71751C8.56959 7.69382 8.56959 9.27674 9.5459 10.253L8.48524 11.3137C6.92314 9.75161 6.92314 7.21895 8.48524 5.65685L11.3137 2.82843C12.8758 1.26633 15.4084 1.26633 16.9705 2.82843C18.5326 4.39052 18.5326 6.92318 16.9705 8.48528L14.8492 10.6066L13.7885 9.54594Z"
                fill="#323F49"
              />
            </svg>
          </div>
          <div className="w-24 h-24   rounded-full flex items-center justify-center">
            <Image src={MetamaskLogo} alt="dag" width={100} height={100} />
          </div>
        </div>
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-bold text-center">Connect to Dagsnap : MetaMask</h2>

            <p className="text-xl font-bold mb-6 text-center">Dagsnap</p>
            <p className="text-gray-400 mt-6 mb-6 text-center text-sm font-medium mx-auto max-w-[75%]">
              If you do not have DAGsnap installed, you will be prompted to do so.
            </p>

            <a
              href="https://docs.metamask.io/snaps/#what-is-snaps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5785EF] hover:underline mt-6 mb-24 text-sm flex items-center justify-center text-center font-medium space-x-2"
            >
              <span> What is Snaps</span>
              <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.535645 1L3.36407 3.82843C3.7546 4.21895 3.7546 4.85212 3.36407 5.24264L0.535646 8.07107"
                  stroke="#5785EF"
                  stroke-linecap="round"
                />
              </svg>
            </a>

            <button
              className="w-full bg-gray-800 text-white py-4 px-4 flex items-center justify-center font-medium hover:bg-gray-700 rounded-xl mb-4"
              onClick={connectToMetaMask}
              disabled={!isMetaMaskReady}
            >
              <Image src={MetamaskMainLogo} alt="metamask" width={20} height={20} className="mr-2" />
              {shouldDisplayReconnectButton(installedSnap) ? 'Reconnect to MetaMask' : 'Connect to MetaMask'}
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-bold text-center">Get Addresses for </h2>

            <p className="text-xl font-bold mb-8 text-center">Dagsnap</p>
            <p className="text-gray-400 mt-6 mb-20 text-center text-sm font-medium mx-auto max-w-[75%]">
              Your DAG account addresses will be created along with your MetaMask public key.
            </p>

            {userAddress && (
              <div className="mt-4 mb-4 p-2 bg-white rounded border border-gray-200">
                <p className="text-gray-700 text-sm break-all">{userAddress}</p>
              </div>
            )}

            <button
              className={`w-full text-white py-4 px-4 flex items-center justify-center font-medium rounded-xl mb-4 ${
                isCopied ? 'bg-green-500 hover:bg-green-600' : 'bg-[#1F2FCD] hover:bg-blue-700'
              }`}
              onClick={handleGetAccount}
            >
              {isCopied ? (
                <span>Copied!</span>
              ) : (
                <>
                  <Image src={ArrowModal} alt="metamask" width={16} height={16} className="mr-2" />
                  <span>{userAddress ? 'Copy Address' : 'Get Addresses'}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectModal;
