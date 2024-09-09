import React from 'react';
import logo from '@/images/logo.png';
import Image from 'next/image';

const Header = ({ userAddress }: { userAddress: any }) => {
  return (
    <header className="flex justify-between items-center mb-6  border-indigo-200/50 border-b pb-4">
      <div className="flex items-center space-x-2 ">
        <div className="w-40 h-10 flex items-center justify-center">
          <Image src={logo} alt="Company Logo" width={160} height={40} className="object-contain max-w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
