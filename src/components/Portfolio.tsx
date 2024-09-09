import React, { useState } from 'react';

const CryptoItem = ({
  icon,
  name,
  symbol,
  price,
  change,
  chart,
}: {
  icon: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  chart: string;
}) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-200">
    <div className="flex items-center">
      <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xl">{icon}</span>
      <div className="ml-3">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{symbol}</div>
      </div>
    </div>
    <div className="flex-grow mx-4">
      <svg className="w-full h-8" viewBox="0 0 100 20">
        <path d={chart} stroke={change.startsWith('+') ? '#10B981' : '#EF4444'} strokeWidth="2" fill="none" />
      </svg>
    </div>
    <div className="text-right">
      <div>{price}</div>
      <div className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</div>
    </div>
  </div>
);

const NFTItem = ({
  name,
  collection,
  price,
  image,
}: {
  name: string;
  collection: string;
  price: string;
  image: string;
}) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-200">
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-md object-cover" />
      <div className="ml-3">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{collection}</div>
      </div>
    </div>
    <div className="text-right">
      <div>{price}</div>
    </div>
  </div>
);

const PortfolioItem = ({
  asset,
  amount,
  value,
  change,
}: {
  asset: string;
  amount: string;
  value: string;
  change: string;
}) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-200">
    <div>
      <div className="font-semibold">{asset}</div>
      <div className="text-sm text-gray-500">{amount}</div>
    </div>
    <div className="text-right">
      <div>{value}</div>
      <div className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</div>
    </div>
  </div>
);

const cryptoData = [
  {
    icon: '₿',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$19953.10',
    change: '+1.76%',
    chart: 'M0,10 L10,8 L20,9 L30,7 L40,10 L50,9 L60,11 L70,10 L80,12 L90,11 L100,13',
  },
  {
    icon: 'Ξ',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$1613.86',
    change: '+1.39%',
    chart: 'M0,10 L10,11 L20,9 L30,12 L40,10 L50,11 L60,8 L70,9 L80,7 L90,8 L100,6',
  },
  {
    icon: '₮',
    name: 'Tether',
    symbol: 'USDT',
    price: '$0.997',
    change: '+0.12%',
    chart: 'M0,10 L10,10 L20,9 L30,11 L40,10 L50,10 L60,9 L70,11 L80,10 L90,10 L100,11',
  },
  {
    icon: '₳',
    name: 'Cardano',
    symbol: 'ADA',
    price: '$0.469800',
    change: '+1.76%',
    chart: 'M0,10 L10,9 L20,11 L30,8 L40,10 L50,9 L60,12 L70,10 L80,11 L90,9 L100,10',
  },
];

const nftData = [
  { name: 'Bored Ape #1234', collection: 'Bored Ape Yacht Club', price: '100 ETH', image: '/api/placeholder/100/100' },
  { name: 'CryptoPunk #5678', collection: 'CryptoPunks', price: '80 ETH', image: '/api/placeholder/100/100' },
  { name: 'Doodle #9101', collection: 'Doodles', price: '5 ETH', image: '/api/placeholder/100/100' },
  { name: 'Azuki #1121', collection: 'Azuki', price: '15 ETH', image: '/api/placeholder/100/100' },
];

const portfolioData = [
  { asset: 'Bitcoin', amount: '0.5 BTC', value: '$9,976.55', change: '+1.76%' },
  { asset: 'Ethereum', amount: '3.2 ETH', value: '$5,164.35', change: '+1.39%' },
  { asset: 'Cardano', amount: '1000 ADA', value: '$469.80', change: '+1.76%' },
  { asset: 'Solana', amount: '20 SOL', value: '$660.00', change: '-0.5%' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Items');

  const tabs = ['Items', 'NFT', 'My Portfolio'];

  return (
    <div className="max-w-2xl mx-auto p-4 h-screen flex flex-col">
      <div className="flex border-b mb-8 justify-between">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-8 py-4 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 flex-grow overflow-hidden">
        {activeTab === 'Items' && (
          <div className="h-full overflow-y-auto px-2">
            {cryptoData.map((item, index) => (
              <CryptoItem key={index} {...item} />
            ))}
          </div>
        )}
        {activeTab === 'NFT' && (
          <div className="h-full overflow-y-auto px-2">
            {nftData.map((item, index) => (
              <NFTItem key={index} {...item} />
            ))}
          </div>
        )}
        {activeTab === 'My Portfolio' && (
          <div className="h-full overflow-y-auto px-2">
            {portfolioData.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
