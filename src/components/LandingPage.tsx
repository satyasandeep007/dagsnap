import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Header from './Header';
import BalanceCard from './BalanceCard';
import MarketPrice from './MarketPrice';
import ConnectModal from './ConnectModal';
import SendModal from './SendModal';
import ReceiveModal from './ReceiveModal';
import Transactions from './Transactions';

const LandingPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);

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

  const toggleSendModal = () => {
    setIsSendModalOpen(!isSendModalOpen);
  };

  const toggleReceiveModal = () => {
    setIsReceiveModalOpen(!isReceiveModalOpen);
  };

  return (
    <div className="bg-indigo-50 p-6 h-screen flex justify-center items-center flex-col">
      <div className="max-w-6xl m-auto bg-white w-4/6 rounded-2xl shadow-lg overflow-hidden flex relative  ">
        {/* LEFT SIDE */}
        <div className="flex-grow p-6">
          <Header />
          <BalanceCard toggleSendModal={toggleSendModal} toggleReceiveModal={toggleReceiveModal} />
          <Portfolio />
          <MarketPrice />
        </div>

        {/* RIGHT SIDE */}
        <Transactions
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          // toggleSlider={toggleSlider}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          toggleConnectModal={toggleConnectModal}
        />
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">Powered by MetaMask Snaps</div>

      <ConnectModal isOpen={isConnectModalOpen} onClose={toggleConnectModal} />

      <SendModal isOpen={isSendModalOpen} onClose={toggleSendModal} />

      <ReceiveModal isOpen={isReceiveModalOpen} onClose={toggleReceiveModal} />
    </div>
  );
};

export default LandingPage;
