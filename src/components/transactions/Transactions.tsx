import React, { useEffect, useRef } from 'react';
import logo from '@/images/dag.png';
import Image from 'next/image';
import TransactionsList from './TransactionsList';
import { TransactionsFooter } from './TransactionsFooter';
import { TransactionsHeader } from './TransactionsHeader';

interface Transaction {
  hash: string;
  amount: number;
  source: string;
  destination: string;
  fee: number;
  timestamp: string;
}

interface TransactionsProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
  toggleConnectModal: () => void;
  transactions: Transaction[];
  userAddress: string;
  installedSnap: any;
  handleDisconnectSnap: any;
  handleRefresh: () => void;
  isRefreshing: boolean;
  marketPrice: number;
}

const Transactions: React.FC<TransactionsProps> = ({
  isDropdownOpen,
  toggleDropdown,
  toggleMenu,
  isMenuOpen,
  toggleConnectModal,
  transactions,
  userAddress,
  installedSnap,
  handleDisconnectSnap,
  handleRefresh,
  isRefreshing,
  marketPrice,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  const handleConnectSnap = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (installedSnap) {
      handleDisconnectSnap();
    } else {
      toggleConnectModal();
    }
  };

  return (
    <div className="w-full h-full bg-slate-50	p-3 flex flex-col justify-between rounded-r-2xl ">
      <TransactionsHeader
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
        userAddress={userAddress}
        handleConnectSnap={handleConnectSnap}
        installedSnap={installedSnap}
        logo={logo}
        menuRef={menuRef}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <TransactionsList transactions={transactions} userAddress={userAddress} marketPrice={marketPrice} />

      <TransactionsFooter userAddress={userAddress} handleRefresh={handleRefresh} isRefreshing={isRefreshing} />
    </div>
  );
};

export default Transactions;
