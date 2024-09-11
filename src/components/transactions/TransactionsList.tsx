export const TransactionsList = ({ transactions, userAddress, marketPrice }: any) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatAmount = (amount: number) => {
    return (amount / 100000000).toFixed(0);
  };

  return (
    <div className="mb-6 h-full">
      <div className="h-full">
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction: any, index: any) => (
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
                      <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="16.8183" cy="16.9702" rx="16.6996" ry="16" fill="#FFEDEC" />
                        <g clip-path="url(#clip0_0_1)">
                          <path
                            d="M13.6869 9.97095V11.9709L20.565 11.9709L8.46826 23.5609L9.93991 24.9709L22.0367 13.3809V19.9709H24.1241V9.97095L13.6869 9.97095Z"
                            fill="#E1473D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_1">
                            <rect width="25.0494" height="24" fill="white" transform="translate(4.29346 4.97095)" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="16.9886" cy="16.9702" rx="16.8601" ry="16" fill="#E2FEE8" />
                        <g clip-path="url(#clip0_0_1)">
                          <path
                            d="M25.4182 10.3805L23.9324 8.97046L11.7193 20.5605V13.9705H9.61182V23.9705H20.1494V21.9705H13.2051L25.4182 10.3805Z"
                            fill="#4AD768"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_1">
                            <rect width="25.2902" height="24" fill="white" transform="translate(4.34326 4.97046)" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium  ">{transaction.source === userAddress ? 'Recieved DAG' : 'Sent DAG'}</p>
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
  );
};

export default TransactionsList;
