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
  );
};
