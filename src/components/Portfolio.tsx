import React from 'react';

export default function Portfolio() {
  return (
    <div className="mb-6">
      <div className="flex border-b">
        <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-500 font-medium">
          Items
        </button>
        <button className="px-4 py-2 text-gray-500">NFT</button>
        <button className="px-4 py-2 text-gray-500">My Portfolio</button>
      </div>

      <div className="mt-4 space-y-4">
        {[
          {
            icon: '₿',
            name: 'Bitcoin',
            symbol: 'BTC',
            price: '$19953.10',
            change: '+1.76%',
            color: 'text-orange-500',
            chart:
              'M3,12 L5,10 L7,11 L9,9 L11,12 L13,11 L15,13 L17,12 L19,14 L21,13',
          },
          {
            icon: 'Ξ',
            name: 'Ethereum',
            symbol: 'ETH',
            price: '$1613.86',
            change: '+1.39%',
            color: 'text-gray-700',
            chart:
              'M3,12 L5,13 L7,11 L9,14 L11,12 L13,13 L15,10 L17,11 L19,9 L21,10',
          },
          {
            icon: '₮',
            name: 'Tether',
            symbol: 'USDT',
            price: '$0.997',
            change: '+0.12%',
            color: 'text-green-500',
            chart:
              'M3,12 L5,12 L7,11 L9,13 L11,12 L13,12 L15,11 L17,13 L19,12 L21,12',
          },
          {
            icon: '₳',
            name: 'Cardano',
            symbol: 'ADA',
            price: '$0.469800',
            change: '+1.76%',
            color: 'text-blue-500',
            chart:
              'M3,12 L5,11 L7,13 L9,10 L11,12 L13,11 L15,14 L17,12 L19,13 L21,11',
          },
        ].map((coin, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className={`w-8 h-8 rounded-full ${coin.color} bg-opacity-20 flex items-center justify-center font-bold text-lg`}
              >
                {coin.icon}
              </span>
              <div className="ml-3">
                <div className="font-semibold text-gray-700">{coin.name}</div>
                <div className="text-sm text-gray-500">{coin.symbol}</div>
              </div>
            </div>
            <div className="flex-grow mx-4">
              <svg
                className="w-full h-8"
                viewBox="0 0 24 16"
                fill="none"
                stroke={coin.change.startsWith('+') ? '#10B981' : '#EF4444'}
                strokeWidth="2"
              >
                <path d={coin.chart} />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-gray-700">{coin.price}</div>
              <div className="text-sm text-green-500">{coin.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
