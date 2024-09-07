'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 flex justify-between items-center">
      <p className="text-[26px] font-bold text-left uppercase">
        <span className="text-[#222]">Constellation</span>
      </p>
      <ConnectButton />
    </div>
  );
}
