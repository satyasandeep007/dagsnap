import React from 'react';
import Image from 'next/image'; // Add this import if using Next.js

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-2">
        <div className="w-40 h-10 flex items-center justify-center"> {/* Changed w-400 to w-40 */}
          <Image
            src="/images/logo1.png" 
            alt="Logo"
            width={160} // Specify width
            height={40} // Specify height
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};
