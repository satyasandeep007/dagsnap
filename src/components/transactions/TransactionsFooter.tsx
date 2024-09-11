export const TransactionsFooter = ({
  userAddress,
  handleRefresh,
  isRefreshing,
}: {
  userAddress: string;
  handleRefresh: () => void;
  isRefreshing: boolean;
}) => {
  return (
    <div className="py-3 flex justify-between items-center border-t border-gray-200">
      <div className={`flex items-center ${!userAddress ? 'cursor-not-allowed' : ''}`}>
        {userAddress ? (
          <a
            href={`https://testnet.dagexplorer.io/address/${userAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-black hover:text-blue-800 transition-colors duration-200"
          >
            <span>View all transactions</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        ) : (
          <span className="flex items-center text-sm text-gray-400">
            View all transactions
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        )}
      </div>
      <button
        onClick={handleRefresh}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isRefreshing}
        aria-label="Refresh transactions"
      >
        <svg
          className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  );
};
