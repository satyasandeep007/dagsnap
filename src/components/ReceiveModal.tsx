import React from 'react';

interface ReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReceiveModal: React.FC<ReceiveModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          <img src="images/qrcode1.png" alt="QR Code" className="w-48 h-48" />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg mb-4 text-center text-sm break-all">
          bc1quqymjx86lw528m8kteu2erw3mvcyj9
        </div>
        <button className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center font-medium">
          Copy Address
        </button>
      </div>
    </div>
  );
};

export default ReceiveModal;
