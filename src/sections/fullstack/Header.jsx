import React from 'react';
import { FaHome } from 'react-icons/fa';
import newcnlogo from './images/newcnlogo.webp';
import RequestCallbackButton from './RequestCallbackButton';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="relative w-full">
        <div className="max-w-[1000px] mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left side: logo and icon */}
          <div className="flex items-center gap-4">
            <FaHome className="w-4 h-4 text-gray-600" />
            <img src={newcnlogo} alt="Logo" className="h-8 object-contain" />
          </div>

          {/* Right side: button */}
          <RequestCallbackButton/>
        </div>
      </nav>
    </header>
  );
};

export default Header;


