import Image from 'next/image';
import logo from '@/images/dag.png';
import bg from '@/images/group.png';
import React from 'react';

interface BalanceCardProps {
  toggleSendModal: () => void;
  toggleReceiveModal: () => void;
  balance: string | null;
  marketPrice: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ toggleSendModal, toggleReceiveModal, balance, marketPrice }) => {
  return (
    <div className="grid grid-cols-5 gap-6 mb-6">
      <div
        className="col-span-3 bg-gray-900 text-white p-6 rounded-xl relative overflow-hidden h-full bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute right-4 top-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <Image src={logo} alt="Logo" />
        </div>
        <h2 className="text-sm uppercase mb-2 text-gray-400 font-thin">CURRENT BALANCE</h2>
        <div className="text-4xl font-bold mb-1">{balance ?? '- -'} DAG</div>
        <div className="mt-4 text-sm text-gray-400 font-thin">
          {balance ? (parseFloat(balance) * marketPrice).toFixed(2) : '- -'} USD
        </div>
      </div>

      <div className="col-span-2 flex flex-col w-full justify-between gap-5">
        <button
          className="w-full h-full bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-between transition-all duration-300 ease-in-out hover:border-blue-500"
          onClick={toggleSendModal}
        >
          <div className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 mr-3 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              transform="rotate(-45)"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            <span>Send</span>
          </div>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        <button
          className="w-full h-full bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-between transition-all duration-300 ease-in-out hover:border-blue-500"
          onClick={toggleReceiveModal}
        >
          <div className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 mr-3 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              transform="rotate(135)"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            <span>Receive</span>
          </div>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
