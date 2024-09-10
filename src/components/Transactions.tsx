import React from 'react';
import logo from '@/images/dag.png';
import Image from 'next/image';

interface Transaction {
  hash: string;
  amount: number;
  source: string;
  destination: string;
  fee: number;
  timestamp: string;
}

interface TransactionsProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
  toggleConnectModal: () => void;
  transactions: Transaction[];
  userAddress: string;
  installedSnap: any;
  handleDisconnectSnap: any;
  handleRefresh: () => void;
  isRefreshing: boolean;
  marketPrice: number;
}

const Transactions: React.FC<TransactionsProps> = ({
  isDropdownOpen,
  toggleDropdown,
  toggleMenu,
  isMenuOpen,
  toggleConnectModal,
  transactions,
  userAddress,
  installedSnap,
  handleDisconnectSnap,
  handleRefresh,
  isRefreshing,
  marketPrice,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatAmount = (amount: number) => {
    return (amount / 100000000).toFixed(0);
  };

  const handleConnectSnap = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (installedSnap) {
      handleDisconnectSnap();
    } else {
      toggleConnectModal();
    }
  };

  return (
    <div className="w-full h-full bg-slate-50	p-3 flex flex-col justify-between rounded-r-2xl ">
      <div className="flex justify-end items-center py-3 space-x-2">
        {' '}
        {/* Use space-x-2 for spacing */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-800 text-white px-4 py-4 rounded-2xl text-sm font-medium flex items-center justify-between w-36 hover:bg-gray-700 transition-colors duration-200"
          >
            <span>TestNet 2.0</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-64 bg-white rounded-lg shadow-lg z-10 overflow-hidden border border-gray-100">
              <div className="px-4 py-3 text-xs text-gray-500 flex items-center justify-between">
                <span>IntegrationNet 2.0</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <div className="px-4 py-3 text-xs text-gray-500 flex items-center justify-between">
                <span>MainNet 2.0</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => window.open(`https://testnet.dagexplorer.io/address/${userAddress}`, '_blank')}
          className="text-blue bg-white px-4 py-4 text-sm rounded-2xl flex items-center border border-gray-200"
        >
          <span className="text-md font-semibold mr-2">DAG Explorer</span> {/* Add margin to the right */}
          <Image src={logo} alt="Company Logo" width={20} height={20} className="object-contain" />
        </button>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-gray-600 bg-white px-4 py-4 rounded-2xl text-sm flex items-center border border-gray-200"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 13V15H4V13H14ZM16 8V10H2V8H16ZM14 3V5H4V3H14Z" fill="#111214" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a href="#" className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 4.5C7.85625 4.5 4.5 7.85625 4.5 12C4.49915 13.5745 4.99411 15.1092 5.91466 16.3865C6.83521 17.6638 8.13461 18.6188 9.6285 19.116C10.0035 19.1813 10.1438 18.9562 10.1438 18.759C10.1438 18.5812 10.134 17.991 10.134 17.3625C8.25 17.7098 7.7625 16.9035 7.6125 16.4813C7.52775 16.2653 7.1625 15.6 6.84375 15.4215C6.58125 15.2812 6.20625 14.934 6.834 14.925C7.425 14.9152 7.8465 15.4687 7.9875 15.6937C8.6625 16.8277 9.741 16.509 10.1715 16.3125C10.2375 15.825 10.434 15.4972 10.65 15.3097C8.98125 15.1222 7.2375 14.475 7.2375 11.6063C7.2375 10.7903 7.52775 10.116 8.00625 9.59025C7.93125 9.40275 7.66875 8.634 8.08125 7.60275C8.08125 7.60275 8.709 7.40625 10.1438 8.37225C10.7543 8.2028 11.3851 8.11751 12.0188 8.11875C12.6563 8.11875 13.2938 8.20275 13.8938 8.3715C15.3278 7.3965 15.9563 7.6035 15.9563 7.6035C16.3688 8.63475 16.1063 9.4035 16.0313 9.591C16.509 10.116 16.8 10.7813 16.8 11.6063C16.8 14.4848 15.0473 15.1222 13.3785 15.3097C13.65 15.5437 13.8848 15.9938 13.8848 16.6973C13.8848 17.7 13.875 18.5063 13.875 18.7598C13.875 18.9563 14.016 19.1902 14.391 19.1152C15.8798 18.6126 17.1734 17.6557 18.0899 16.3794C19.0064 15.103 19.4996 13.5713 19.5 12C19.5 7.85625 16.1438 4.5 12 4.5Z"
                    fill="#656D85"
                  ></path>
                </svg>
                <span
                  onClick={() => window.open('https://github.com/satyasandeep007/DAGSnap', '_blank')}
                  className="ml-2"
                >
                  Github
                </span>
              </a>

              <div className="border-t border-gray-100 my-1"></div>
              <button
                onClick={handleConnectSnap}
                className="px-4 py-3 text-sm text-green-600 hover:bg-gray-100 flex items-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7729 14.6522L15.7124 13.5902L16.7729 12.5297C17.1237 12.182 17.4023 11.7685 17.5928 11.3129C17.7832 10.8572 17.8818 10.3685 17.8829 9.87465C17.884 9.38081 17.7875 8.89162 17.5991 8.43517C17.4106 7.97871 17.1338 7.56398 16.7846 7.21479C16.4354 6.86559 16.0207 6.5888 15.5642 6.40032C15.1077 6.21183 14.6186 6.11536 14.1247 6.11645C13.6309 6.11753 13.1421 6.21614 12.6865 6.40662C12.2309 6.5971 11.8174 6.8757 11.4697 7.22642L10.4092 8.28767L9.34795 7.22717L10.4099 6.16667C11.3946 5.18206 12.73 4.62891 14.1224 4.62891C15.5149 4.62891 16.8503 5.18206 17.8349 6.16667C18.8196 7.15129 19.3727 8.48672 19.3727 9.87917C19.3727 11.2716 18.8196 12.6071 17.8349 13.5917L16.7737 14.6522H16.7729ZM14.6519 16.7732L13.5907 17.8337C12.6061 18.8183 11.2707 19.3714 9.8782 19.3714C8.48574 19.3714 7.15031 18.8183 6.1657 17.8337C5.18108 16.8491 4.62793 15.5136 4.62793 14.1212C4.62793 12.7287 5.18108 11.3933 6.1657 10.4087L7.22695 9.34817L8.28745 10.4102L7.22695 11.4707C6.87622 11.8183 6.59763 12.2319 6.40714 12.6875C6.21666 13.1431 6.11805 13.6319 6.11697 14.1257C6.11589 14.6195 6.21236 15.1087 6.40084 15.5652C6.58933 16.0216 6.86611 16.4364 7.21531 16.7856C7.56451 17.1348 7.97924 17.4115 8.43569 17.6C8.89215 17.7885 9.38133 17.885 9.87517 17.8839C10.369 17.8828 10.8578 17.7842 11.3134 17.5937C11.769 17.4032 12.1825 17.1246 12.5302 16.7739L13.5907 15.7134L14.6519 16.7739V16.7732ZM14.1209 8.81792L15.1822 9.87917L9.87895 15.1817L8.8177 14.1212L14.1209 8.81867V8.81792Z"
                    fill="#21A35D"
                  ></path>
                </svg>
                <span className="ml-2"> {installedSnap ? 'Disconnect' : 'Connect'}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Transactions */}
      <div className="mb-6 h-full">
        <div className="h-full">
          {transactions && transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <div
                key={transaction.hash}
                className={`flex flex-col mb-4 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105  `}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        transaction.source === userAddress ? 'bg-red-200' : 'bg-green-200'
                      }`}
                    >
                      {transaction.source === userAddress ? (
                        <svg width="12" height="12" fill="currentColor" className="text-red-600">
                          <path d="M6 12L0 6H3V0H9V6H12L6 12Z" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" fill="currentColor" className="text-green-600">
                          <path d="M6 0L12 6H9V12H3V6H0L6 0Z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium  ">
                        {transaction.source === userAddress ? 'Recieved DAG' : 'Sent DAG'}
                      </p>
                      <p className="text-sm text-gray-400">{formatDate(transaction.timestamp)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium ">
                      US${(parseFloat(formatAmount(transaction.amount)) * marketPrice).toFixed(3)}
                    </p>
                    <p className="text-sm text-gray-400">{formatAmount(transaction.amount)} DAG</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center gap-4 items-center h-full py-6">
              <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.032 0H1.7894L4.7894 3L12.728 10.9386L0 23.6666L2.1214 25.7879L14.8494 13.0599L22.7894 21L25.7894 24V19.7574V3V0H22.7894H6.032ZM9.032 3L22.7894 16.7574V3H9.032ZM29.5465 48H33.7891L30.7891 45L22.8506 37.0615L35.5785 24.3335L33.4572 22.2122L20.7293 34.9401L12.7891 27L9.7891 24V28.2426V45V48H12.7891H29.5465ZM18.608 37.0615L20.7293 39.1828L26.5465 45H12.7891V31.2426L18.608 37.0615Z"
                  fill="url(#paint0_linear_21_628)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_21_628"
                    x1="17.7893"
                    y1="0"
                    x2="17.7893"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E1E6F0" />
                    <stop offset="1" stopColor="#CED3E0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex justify-center gap-2 items-center">
                <div className="text-center text-gray-400 h-full font-thin">No transactions</div>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.6562 10C15.6562 13.3137 12.9699 16 9.65625 16C6.34254 16 3.65625 13.3137 3.65625 10C3.65625 6.68629 6.34254 4 9.65625 4C12.9699 4 15.6562 6.68629 15.6562 10ZM16.6562 10C16.6562 13.866 13.5223 17 9.65625 17C5.79026 17 2.65625 13.866 2.65625 10C2.65625 6.13401 5.79026 3 9.65625 3C13.5223 3 16.6562 6.13401 16.6562 10ZM8.90625 7.75V6.25H10.4062V7.75H8.90625ZM8.90625 13.75V9.25H10.4062V13.75H8.90625Z"
                    fill="#9095A3"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-2 flex justify-between items-center">
        <a
          href={`https://testnet.dagexplorer.io/address/${userAddress}`}
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="flex justify-right gap-2 items-center text-sm text-gray-600 font-normal"
        >
          <span>View all transactions</span>
          <span className="text-blue-500">→</span>
        </a>
        <button onClick={handleRefresh} className="flex items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: 'transform 0.3s',
              transform: isRefreshing ? 'rotate(360deg)' : 'rotate(0deg)',
              animation: isRefreshing ? 'spin 1s linear infinite' : 'none', // Spin animation
            }}
          >
            <path
              d="M4.00812 3.27063C5.14222 2.28791 6.59312 1.74791 8.09375 1.75001C11.5457 1.75001 14.3438 4.54813 14.3438 8.00001C14.3438 9.335 13.925 10.5725 13.2125 11.5875L11.2188 8.00001H13.0938C13.0938 7.01977 12.8057 6.06113 12.2654 5.24329C11.7251 4.42545 10.9562 3.78448 10.0545 3.40008C9.15275 3.01568 8.15795 2.90481 7.19373 3.08126C6.2295 3.25771 5.33841 3.71369 4.63125 4.39251L4.00812 3.27063ZM12.1794 12.7294C11.0452 13.7121 9.59442 14.2521 8.09375 14.25C4.64187 14.25 1.84375 11.4519 1.84375 8.00001C1.84375 6.66501 2.2625 5.42751 2.975 4.41251L4.96875 8.00001H3.09375C3.09367 8.98025 3.38172 9.93891 3.92208 10.7567C4.46245 11.5746 5.23129 12.2155 6.13302 12.5999C7.03473 12.9843 8.02955 13.0952 8.99375 12.9187C9.958 12.7423 10.8491 12.2863 11.5562 11.6075L12.1794 12.7294Z"
              fill="#656D85"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Transactions;
