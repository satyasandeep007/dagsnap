import React, { useState } from 'react';

const NFTItem = ({
  name,
  collection,
  price,
  image,
  lastItem,
}: {
  name: string;
  collection: string;
  price: string;
  image: string;
  lastItem: boolean;
}) => (
  <div className={`flex items-center justify-between py-4 ${!lastItem ? 'border-b border-gray-200' : ''}`}>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-md object-cover" />
      <div className="ml-3">
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-500 font-thin ">{collection}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="font-semibold">{price}</div>
    </div>
  </div>
);

const nftData = [
  {
    name: 'El Paca',
    collection: 'El Paca is a meme-utility token',
    price: '0',
    image: 'https://icons-metagraph.s3.amazonaws.com/PACA/ElPaca_token2x.png',
  },
  {
    name: 'DOR',
    collection: 'Dor Traffic Miner',
    price: '0',
    image: 'https://icons-metagraph.s3.amazonaws.com/DOR/dortoken_red.svg',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Metagraphs');

  const tabs = ['Metagraphs'];

  return (
    <div className="w-full  mx-auto py-4  flex-grow flex flex-col overflow-hidden">
      <div className="flex border-b justify-between">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-2 py-4 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500 font-normal'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="pt-4 flex-grow overflow-y-auto">
        {activeTab === 'Metagraphs' && (
          <div className="h-full overflow-y-auto px-2">
            {nftData.map((item, index) => (
              <NFTItem key={index} {...item} lastItem={index === nftData.length - 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
