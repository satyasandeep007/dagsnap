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
      <div className="bg-white rounded-2xl w-[360px] overflow-hidden shadow-xl">
        <div className="bg-gray-50 p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <h2 className="text-lg font-semibold text-gray-800">RECEIVE</h2>
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
          <div className="flex justify-center mb-4">
            <QRCodeSVG value={userAddress} size={200} />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-100 px-3 py-2 rounded-lg mb-4 text-center text-xs break-all">{userAddress}</div>
          <button
            onClick={handleCopyAddress}
            className="w-full py-3 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-colors duration-200"
          >
            Copy Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiveModal;
