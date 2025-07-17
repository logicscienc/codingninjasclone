import React from "react";
import GroupIITM from "../trainingandinternship/img/GroupIITM.png";

const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-[#00b189] text-white text-sm md:text-base py-2 text-center font-semibold">
        Hurry limited seats available. Claim ₹20,000 scholarship — Enroll before the timer runs out to secure your future in tech!
      </div>

      <div className="bg-white flex items-center justify-between px-4 md:px-10 py-4 shadow-sm">
        <img
          src={GroupIITM}
          alt="IITM Pravartak Logo"
          className="w-[140px] md:w-[180px] h-auto"
        />

        <a
          href="/enroll"
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
