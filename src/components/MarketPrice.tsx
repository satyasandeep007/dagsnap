import React, { useEffect, useState } from 'react';

export const getCoinData = async (coinid: any) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`;

  return await fetch(url);
};

const MarketPrice: React.FC = () => {
  const [marketPrice, setMarketPrice] = useState(0);
  useEffect(() => {
    getCoinData('constellation-labs')
      .then((response) => response.json())
      .then((data) => {
        setMarketPrice(data.market_data.current_price.usd);
      });
  }, []);
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-500 text-sm">
        Market Price: <span className="text-blue-500 font-medium"> {marketPrice || 0} USD</span>
      </div>
      <button
        className="bg-white text-gray-700 px-4 py-2 rounded-full flex items-center gap-3 border border-gray-200 hover:bg-blue-50 transition-colors duration-200"
        onClick={() => console.log('Buy Now clicked')} // Add an onClick handler
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2969 3.25H12.2969V0.25H0.296875V13.75H8.54688V9.625H11.1719L7.79688 6.25L4.42188 9.625H7.04688V12.25H1.79688V4.75H13.7969V12.25H10.0469V13.75H15.2969V3.25ZM1.79688 3.25V1.75H10.7969V3.25H1.79688Z"
            fill="#5785EF"
          />
        </svg>

        <span className="text-sm font-medium">Buy DAG</span>
      </button>
    </div>
  );
};

export default MarketPrice;
