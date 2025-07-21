import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import iitg from '../datascience/img/iitg.png';


const Header = ({ onDownloadClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="relative w-full">
        <div className="max-w-[1000px] mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Left side: logo and icon */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <FaHome className="w-6 h-6 text-gray-600 cursor-pointer" />
            </Link>
            <img src={iitg} alt="Logo" className="h-10 object-contain" />
          </div>

          <button 
           onClick={onDownloadClick} 
            className="text-white bg-orange-500 px-4 py-2 rounded font-semibold hover:bg-amber-700 cursor-pointer text-sm w-full sm:w-auto">
            Download brochure
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;