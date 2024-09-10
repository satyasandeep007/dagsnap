'use client';

import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import Header from './Header';
import BalanceCard from './BalanceCard';
import MarketPrice from './MarketPrice';
import ConnectModal from './ConnectModal';
import SendModal from './SendModal';
import ReceiveModal from './ReceiveModal';
import Transactions from './Transactions';
import { useMetaMaskContext } from '@/hooks/MetamaskContext';
import { useMetaMask } from '@/hooks/useMetaMask';
import { getCoinData } from '@/utils/api';
import { useRequestSnap } from '@/hooks/useRequestSnap';

const LandingPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const { userAddress, balance, transactions, setInstalledSnap, setUserAddress, setBalance, setTransactions }: any =
    useMetaMaskContext();
  const { getAccount, installedSnap, getBalance, getTransactions } = useMetaMask();
  const [marketPrice, setMarketPrice] = useState(0);
  const { disconnectSnap } = useRequestSnap();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleConnectModal = () => {
    setIsConnectModalOpen(!isConnectModalOpen);
  };

  const toggleSendModal = () => {
    setIsSendModalOpen(!isSendModalOpen);
  };

  const toggleReceiveModal = () => {
    setIsReceiveModalOpen(!isReceiveModalOpen);
  };

  console.log(userAddress, 'userAddress');

  useEffect(() => {
    if (userAddress) {
      getBalance();
      getTransactions();
    }
  }, [userAddress]);

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    getCoinData('constellation-labs')
      .then((response) => response.json())
      .then((data) => {
        setMarketPrice(data.market_data.current_price.usd);
      });
  }, []);

  const handleDisconnectSnap = () => {
    disconnectSnap();
  };

  return (
    <div className="bg-indigo-50 p-6 h-screen flex justify-center items-center flex-col">
      <div className="max-w-6xl m-auto bg-white w-4/6 rounded-2xl shadow-sm flex  h-4/5  ">
        {/* LEFT SIDE */}
        <div className="h-full w-3/5 p-6 flex flex-col justify-between">
          <Header userAddress={userAddress} />
          <BalanceCard toggleSendModal={toggleSendModal} toggleReceiveModal={toggleReceiveModal} balance={balance} />
          <Portfolio />
          <MarketPrice />
        </div>

        {/* RIGHT SIDE */}
        <div className="h-full w-2/5">
          <Transactions
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            toggleConnectModal={toggleConnectModal}
            transactions={transactions}
            userAddress={userAddress}
            installedSnap={installedSnap}
            handleDisconnectSnap={handleDisconnectSnap}
          />
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">Powered by MetaMask Snaps</div>

      {isConnectModalOpen && <ConnectModal isOpen={isConnectModalOpen} onClose={toggleConnectModal} />}

      {isSendModalOpen && <SendModal onClose={toggleSendModal} balance={balance} marketPrice={marketPrice} />}

      {isReceiveModalOpen && <ReceiveModal onClose={toggleReceiveModal} userAddress={userAddress} />}
    </div>
  );
};

export default LandingPage;
