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

const LandingPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const { userAddress, balance, transactions }: any = useMetaMaskContext();
  const { getAccount, getBalance, getTransactions } = useMetaMask();

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
    getBalance();
    getTransactions();
  }, [userAddress]);

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div className="bg-indigo-50 p-6 h-screen flex justify-center items-center flex-col">
      <div className="max-w-6xl m-auto bg-white w-4/6 rounded-2xl shadow-sm overflow-hidden flex relative h-4/5  ">
        {/* LEFT SIDE */}
        <div className="flex-grow p-6">
          <Header userAddress={userAddress} />
          <BalanceCard toggleSendModal={toggleSendModal} toggleReceiveModal={toggleReceiveModal} balance={balance} />
          <Portfolio />
          <MarketPrice />
        </div>

        {/* RIGHT SIDE */}
        <Transactions
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          toggleConnectModal={toggleConnectModal}
          transactions={transactions}
          userAddress={userAddress}
        />
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">Powered by MetaMask Snaps</div>

      <ConnectModal isOpen={isConnectModalOpen} onClose={toggleConnectModal} />

      <SendModal isOpen={isSendModalOpen} onClose={toggleSendModal} />

      <ReceiveModal isOpen={isReceiveModalOpen} onClose={toggleReceiveModal} userAddress={userAddress} />
    </div>
  );
};

export default LandingPage;
