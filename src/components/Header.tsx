import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-2">
        <div className="w-40 h-10 flex items-center justify-center">
          <img
            src="/images/logo1.png"
            alt="Company Logo"
            width={160}
            height={40}
            className="object-contain max-w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
