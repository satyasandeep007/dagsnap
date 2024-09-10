'use client';

import React, { useCallback, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface ReceiveModalProps {
  onClose: () => void;
  userAddress: string;
}

const ReceiveModal: React.FC<ReceiveModalProps> = ({ onClose, userAddress }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = useCallback(() => {
    navigator.clipboard
      .writeText(userAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy address: ', err));
  }, [userAddress]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">



      <div className="bg-gradient-to-tr from-white to-blue-100 rounded-2xl w-[22rem] h-[30rem] p-2 overflow-hidden shadow-xl flex flex-col">
        <div className="p-4 flex-grow">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.12646 5.23584V15.68H12.7856"
                  stroke="#5785EF"
                  strokeWidth="2.31"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.1135 1.22709L3.40994 14.7403"
                  stroke="#5785EF"
                  strokeWidth="2.31"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-normal font-normal text-gray-800">RECEIVE</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mb-6 ">
            <div className="bg-white p-2">
              <QRCodeSVG value={userAddress} size={180} />
            </div>
          </div>
          <div className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-center text-xs break-all font-mono">{userAddress}</div>
        </div>
        <div className="p-4">
          <button
            onClick={handleCopyAddress}
            className={`w-full py-3 rounded-lg text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center ${
              copied ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {copied ? (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Copied!
              </>
            ) : (
              'Copy Address'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiveModal;
