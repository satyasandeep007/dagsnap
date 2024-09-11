import React, { useState, useEffect } from 'react';
import logo from '@/images/dglogo.png';
import Image from 'next/image';

const Header = ({ isConnected }: { isConnected: boolean }) => {
  return (
    <header className="flex justify-between items-center mb-6 border-indigo-200/50 border-b pb-4">
      <div className="flex items-center space-x-2">
        <div className="w-40 h-10 flex items-center justify-center">
          <Image src={logo} alt="Company Logo" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-sm text-gray-600">{isConnected ? 'Connected' : 'Not Connected'}</span>
      </div>
    </header>
  );
};

export default Header;
