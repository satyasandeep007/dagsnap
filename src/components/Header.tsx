import React from 'react';
import logo from '@/images/dag.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6  border-indigo-200/50 border-b pb-4">
      <div className="flex items-center space-x-2 ">
        <div className="w-40 h-10 flex items-center justify-center">
          <Image src={logo} alt="Company Logo" width={30} height={30} className="object-contain max-w-full" />
          <span className="text-2xl pl-2 font-bold">DAG</span>
          <span className="text-2xl pr-2 font-thin">SNAP</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
