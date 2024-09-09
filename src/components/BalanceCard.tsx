import React, { useEffect } from 'react';
import { dag4 } from '@stardust-collective/dag4';

interface BalanceCardProps {
  toggleSendModal: () => void;
  toggleReceiveModal: () => void;
  balance: string | null;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ toggleSendModal, toggleReceiveModal, balance }) => {
  const getTransactions = async (): Promise<any[]> => {
    dag4.account.connect({
      networkVersion: '2.0',
      testnet: true,
    });
    dag4.account.loginPublicKey('DAG0hHS1f5ATEUtKbK5GAkzLgEcPbgc7obXvCSdb');
    return dag4.account.getTransactions(100);
  };

  const getBalance = async (): Promise<number> => {
    dag4.account.connect({
      networkVersion: '2.0',
      testnet: true,
    });

    return dag4.account.getBalanceFor('DAG0hHS1f5ATEUtKbK5GAkzLgEcPbgc7obXvCSdb');
  };

  useEffect(() => {
    async function fetchData() {
      const balance = await getBalance();
      const transactions = await getTransactions();
      console.log(balance, transactions, 'onam');
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-6 mb-6">
      <div className="col-span-3 bg-gray-900 text-white p-6 rounded-xl relative overflow-hidden">
        <div className="absolute right-4 top-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <img src="images/logo1.png" alt="Logo" className="w-8 h-8" />
        </div>
        <h2 className="text-sm uppercase mb-2">CURRENT BALANCE</h2>
        <div className="text-4xl font-bold mb-1">{balance} DAG</div>
        <div className="text-sm text-gray-400">/ Sats</div>
        <div className="mt-4 text-sm">-- USD</div>
      </div>

      <div className="col-span-2 space-y-4">
        <button
          className="w-full bg-gray-100 p-4 rounded-xl flex items-center justify-between"
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
          className="w-full bg-gray-100 p-4 rounded-xl flex items-center justify-between"
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
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
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
