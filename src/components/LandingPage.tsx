'use client';

import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import Header from './Header';
import BalanceCard from './BalanceCard';
import MarketPrice from './MarketPrice';
import ConnectModal from './modals/ConnectModal';
import SendModal from './modals/SendModal';
import ReceiveModal from './modals/ReceiveModal';
import Transactions from './transactions/Transactions';
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
  const { userAddress, balance, transactions }: any = useMetaMaskContext();
  const { getAccount, installedSnap, getBalance, getTransactions } = useMetaMask();
  const [marketPrice, setMarketPrice] = useState(0);
  const { disconnectSnap } = useRequestSnap();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
    getBalance();
    getTransactions();
    // toggleConnectModal();
  };

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
    const fetchMarketPrice = async () => {
      if (userAddress) {
        const price: any = await getCoinData('constellation-labs');
        setMarketPrice(price);
      }
    };

    fetchMarketPrice();
  }, [userAddress]);

  const handleDisconnectSnap = () => {
    disconnectSnap();
    localStorage.clear();
  };

  return (
    <div className="bg-indigo-50 p-6 h-screen flex justify-center items-center flex-col">
      <div className="max-w-6xl m-auto bg-white w-4/6 rounded-2xl shadow-sm flex  h-4/5  ">
        {/* LEFT SIDE */}
        <div className="h-full w-3/5 p-6 flex flex-col justify-between">
          <Header />
          <BalanceCard
            toggleSendModal={toggleSendModal}
            toggleReceiveModal={toggleReceiveModal}
            balance={balance}
            marketPrice={marketPrice}
          />
          <Portfolio />
          <MarketPrice marketPrice={marketPrice} />
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
            handleRefresh={handleRefresh}
            isRefreshing={isRefreshing}
            marketPrice={marketPrice}
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
