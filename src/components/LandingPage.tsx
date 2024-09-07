import React, { useState } from 'react';

const DagSnapUI = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleConnectModal = () => {
    setIsConnectModalOpen(!isConnectModalOpen);
  };

  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex relative">
        <div className="flex-grow p-6">
          <header className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-5 8l5-5 5 5-5 5-5-5z"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-800">DAGSNAP</span>
            </div>
          </header>
          
          <div className="grid grid-cols-5 gap-6 mb-6">
            <div className="col-span-3 bg-gray-900 text-white p-6 rounded-xl relative overflow-hidden">
              <div className="absolute right-4 top-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-5 8l5-5 5 5-5 5-5-5z"/>
                </svg>
              </div>
              <h2 className="text-sm uppercase mb-2">CURRENT BALANCE</h2>
              <div className="text-4xl font-bold mb-1">24.00 DAG</div>
              <div className="text-sm text-gray-400">/ Sats</div>
              <div className="mt-4 text-sm">-- USD</div>
            </div>
            
            <div className="col-span-2 space-y-4">
              <button className="w-full bg-gray-100 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  <span>Send</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <button className="w-full bg-gray-100 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Receive</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex border-b">
              <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-500 font-medium">Items</button>
              <button className="px-4 py-2 text-gray-500">NFT</button>
              <button className="px-4 py-2 text-gray-500">My Portfolio</button>
            </div>
            
            <div className="mt-4 space-y-4">
              {[
                { icon: '₿', name: 'Bitcoin', symbol: 'BTC', price: '$19953.10', change: '+1.76%', color: 'text-orange-500', chart: 'M3,12 L5,10 L7,11 L9,9 L11,12 L13,11 L15,13 L17,12 L19,14 L21,13' },
                { icon: 'Ξ', name: 'Ethereum', symbol: 'ETH', price: '$1613.86', change: '+1.39%', color: 'text-gray-700', chart: 'M3,12 L5,13 L7,11 L9,14 L11,12 L13,13 L15,10 L17,11 L19,9 L21,10' },
                { icon: '₮', name: 'Tether', symbol: 'USDT', price: '$0.997', change: '+0.12%', color: 'text-green-500', chart: 'M3,12 L5,12 L7,11 L9,13 L11,12 L13,12 L15,11 L17,13 L19,12 L21,12' },
                { icon: '₳', name: 'Cardano', symbol: 'ADA', price: '$0.469800', change: '+1.76%', color: 'text-blue-500', chart: 'M3,12 L5,11 L7,13 L9,10 L11,12 L13,11 L15,14 L17,12 L19,13 L21,11' },
              ].map((coin, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className={`w-8 h-8 rounded-full ${coin.color} bg-opacity-20 flex items-center justify-center font-bold text-lg`}>{coin.icon}</span>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-700">{coin.name}</div>
                      <div className="text-sm text-gray-500">{coin.symbol}</div>
                    </div>
                  </div>
                  <div className="flex-grow mx-4">
                    <svg className="w-full h-8" viewBox="0 0 24 16" fill="none" stroke={coin.change.startsWith('+') ? '#10B981' : '#EF4444'} strokeWidth="2">
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
          
          <div className="flex justify-between items-center">
            <div className="text-gray-500">Market Price: <span className="text-blue-500 font-medium">0 USD</span></div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Buy Now
            </button>
          </div>
        </div>
        
        <div className="w-500 bg-gray-200 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center"
                >
                  MainNet 2.0
                  <svg className={`w-4 h-4 ml-1 transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">MainNet 1.0</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">TestNet</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DevNet</a>
                  </div>
                )}
              </div>
              <button 
                onClick={toggleSlider}
                className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                DAG Explorer
              </button>
              <div className="relative">
                <button 
                  onClick={toggleMenu}
                  className="text-gray-600 bg-white rounded-full p-1 shadow"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Help
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleConnectModal(); }} className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-100 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7729 14.6522L15.7124 13.5902L16.7729 12.5297C17.1237 12.182 17.4023 11.7685 17.5928 11.3129C17.7832 10.8572 17.8818 10.3685 17.8829 9.87465C17.884 9.38081 17.7875 8.89162 17.5991 8.43517C17.4106 7.97871 17.1338 7.56398 16.7846 7.21479C16.4354 6.86559 16.0207 6.5888 15.5642 6.40032C15.1077 6.21183 14.6186 6.11536 14.1247 6.11645C13.6309 6.11753 13.1421 6.21614 12.6865 6.40662C12.2309 6.5971 11.8174 6.8757 11.4697 7.22642L10.4092 8.28767L9.34795 7.22717L10.4099 6.16667C11.3946 5.18206 12.73 4.62891 14.1224 4.62891C15.5149 4.62891 16.8503 5.18206 17.8349 6.16667C18.8196 7.15129 19.3727 8.48672 19.3727 9.87917C19.3727 11.2716 18.8196 12.6071 17.8349 13.5917L16.7737 14.6522H16.7729ZM14.6519 16.7732L13.5907 17.8337C12.6061 18.8183 11.2707 19.3714 9.8782 19.3714C8.48574 19.3714 7.15031 18.8183 6.1657 17.8337C5.18108 16.8491 4.62793 15.5136 4.62793 14.1212C4.62793 12.7287 5.18108 11.3933 6.1657 10.4087L7.22695 9.34817L8.28745 10.4102L7.22695 11.4707C6.87622 11.8183 6.59763 12.2319 6.40714 12.6875C6.21666 13.1431 6.11805 13.6319 6.11697 14.1257C6.11589 14.6195 6.21236 15.1087 6.40084 15.5652C6.58933 16.0216 6.86611 16.4364 7.21531 16.7856C7.56451 17.1348 7.97924 17.4115 8.43569 17.6C8.89215 17.7885 9.38133 17.885 9.87517 17.8839C10.369 17.8828 10.8578 17.7842 11.3134 17.5937C11.769 17.4032 12.1825 17.1246 12.5302 16.7739L13.5907 15.7134L14.6519 16.7739V16.7732ZM14.1209 8.81792L15.1822 9.87917L9.87895 15.1817L8.8177 14.1212L14.1209 8.81867V8.81792Z" fill="#21A35D"></path></svg>
                      Connect
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm">
              no transactions
              <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>View all transactions</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>

        {/* Sliding panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSliderOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 relative">
            {/* Close button */}
            <button 
              onClick={toggleSlider}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <h2 className="text-lg font-bold mb-4">Wallets</h2>
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <span>DAG COIN</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div className="text-2xl font-bold mt-2">0 DAG</div>
            </div>
            <button className="w-full bg-blue-100 text-blue-600 p-3 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Add Lightning Wallets
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">Fast transaction timings and low transaction fees</p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        Powered by MetaMask Snaps
      </div>

      {/* Connect Modal */}
      {isConnectModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              </div>
              <button onClick={toggleConnectModal} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-5 8l5-5 5 5-5 5-5-5z"/>
                </svg>
              </div>
              <div className="w-6 h-12 flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                  {/* Add MetaMask fox icon SVG path here */}
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">Connect to Dagsnap : MetaMask DAG snap</h2>
            <p className="text-gray-600 mb-4 text-center text-sm">
              If you do not have DAGsnap installed, you will be prompted to do so.
            </p>
            <a href="#" className="text-blue-500 hover:underline mb-6 text-sm block text-center">What is Snaps &gt;</a>
            <button className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center font-medium">
              <svg className="w-5 h-5 mr-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                {/* Add MetaMask fox icon SVG path here */}
              </svg>
              Connect to Metamask
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DagSnapUI;