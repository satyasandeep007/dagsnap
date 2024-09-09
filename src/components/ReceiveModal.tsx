'use client';

import React, { useCallback, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface ReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  userAddress: string;
}

const ReceiveModal: React.FC<ReceiveModalProps> = ({ isOpen, onClose, userAddress }) => {
  if (!isOpen) return null;

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
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">RECEIVE</h2>
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
        <div className="flex justify-center mb-4">
          <QRCodeSVG value={userAddress} size={192} />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg mb-4 text-center text-sm break-all">{userAddress}</div>
        <button
          onClick={handleCopyAddress}
          className={`w-full py-3 rounded-lg flex items-center justify-center font-medium transition-colors duration-200 ${
            copied ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'
          }`}
        >
          <span className="mr-2">{copied ? 'Copied!' : 'Copy Address'}</span>
          {copied && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReceiveModal;
