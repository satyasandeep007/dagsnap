import React from 'react';

interface SendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SendModal: React.FC<SendModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">SEND</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="flex items-center">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l-lg"
              placeholder="0.00"
            />
            <div className="bg-blue-100 text-blue-800 p-2 rounded-r-lg">
              DAG
            </div>
            <button className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              MAX
            </button>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>0.00 USD</span>
            <span>Fee: 0 DAG</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Balance</span>
            <span>0 DAG / 0.00USD</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            TO
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Paste or input the destination address"
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button className="flex-1 bg-gray-800 text-white py-2 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendModal;
