import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-5 8l5-5 5 5-5 5-5-5z" />
          </svg>
        </div>
        <span className="font-bold text-xl text-gray-800">DAGSNAP</span>
      </div>
    </header>
  );
};
