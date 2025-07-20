import React from "react";
import iitg from "./img/iitg.png";

const Header = () => {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-[#00b189] text-white text-xs sm:text-sm md:text-base py-2 px-3 text-center font-semibold">
        Hurry limited seats available. Claim ₹20,000 scholarship — Enroll before the timer runs out to secure your future in tech!
      </div>

      {/* Main Header */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 gap-3 md:gap-0 shadow-sm">
        {/* Logo */}
        <img
          src={iitg}
          alt="IITM Pravartak Logo"
          className="w-[180px] sm:w-[200px] md:w-[280px] h-auto"
        />

        {/* Enroll Button */}
        <a
          href="/enr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3f6ad8] hover:bg-[#355cb2] text-white font-semibold text-sm md:text-base px-5 py-2 rounded transition duration-200"
        >
          Enrol Now
        </a>
      </div>
    </div>
  );
};

export default Header;
