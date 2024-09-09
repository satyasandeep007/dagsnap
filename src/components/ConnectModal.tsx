import React from 'react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          </div>
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
        <div className="flex justify-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-5 8l5-5 5 5-5 5-5-5z" />
            </svg>
          </div>
          <div className="w-6 h-12 flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
              {/* Add MetaMask fox icon SVG path here */}
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 text-center">Connect to Dagsnap : MetaMask DAG snap</h2>
        <p className="text-gray-600 mb-4 text-center text-sm">
          If you do not have DAGsnap installed, you will be prompted to do so.
        </p>
        <a
          href="https://docs.metamask.io/snaps/#what-is-snaps"
          target={'_blank'}
          className="text-blue-500 hover:underline mb-6 text-sm block text-center"
        >
          What is Snaps &gt;
        </a>
        <button
          className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center font-medium"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            // Open the MetaMask Flask extension page in a new tab
            window.open('#', '_blank');
            // Add any additional MetaMask connection logic here
            console.log('Connecting to MetaMask...');
          }}
        >
          <svg className="w-5 h-5 mr-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            {/* Add MetaMask fox icon SVG path here */}
          </svg>
          Connect to Metamask
        </button>
      </div>
    </div>
  );
};

export default ConnectModal;
