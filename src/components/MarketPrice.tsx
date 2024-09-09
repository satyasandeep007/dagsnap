import React from 'react';

const MarketPrice: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-500">
        Market Price: <span className="text-blue-500 font-medium">0 USD</span>
      </div>
      <button
        className="bg-white text-gray-700 px-4 py-2 rounded-full flex items-center border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors duration-200"
        onClick={() => console.log('Buy Now clicked')} // Add an onClick handler
      >
        <svg
          className="w-5 h-5 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true" // Add aria-hidden for decorative SVG
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        <span className="font-medium">Buy Now</span>
      </button>
    </div>
  );
};

export default MarketPrice;
