import React from 'react';

interface SendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SendModal: React.FC<SendModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 w-[24rem] h-[34rem] shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <svg
              transform="rotate(180)"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <h2 className="text-normal font-normal text-gray-800">SEND</h2>
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

        <div className="py-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <div className="flex items-center">
            <input type="text" className="flex-grow p-2 border rounded-l-lg" placeholder="0.00" />
            <div className="bg-blue-100 text-blue-800 p-2 rounded-r-lg">DAG</div>
            <button className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">MAX</button>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>0.00 USD</span>
            <span>Fee: 0 DAG</span>
          </div>
        </div>

        <div className="py-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Balance</span>
            <span>0 DAG / 0.00USD</span>
          </div>
        </div>

        <div className="bg-white w-full">
          {' '}
          <div className="py-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">TO</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Paste or input the destination address"
            />
          </div>
          <div className="flex space-x-4">
            <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg">
              Cancel
            </button>
            <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendModal;
