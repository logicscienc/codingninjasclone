import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "../assets/logo.svg";
import fswdImg from "../assets/fswdImg.svg";
import dataImg from "../assets/dataImg.svg";
import iitDataImg from '../assets/iitDataImg.svg';

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-[1000px] mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo + Menu */}
          <div className="flex items-center gap-10">
            <img src={Logo} alt="Coding Ninjas Logo" className="h-8" />
            <ul className="flex gap-6 items-center font-medium text-gray-700">
              {/* Job Bootcamp with dropdown */}
              <li className="relative group flex items-center gap-1 cursor-pointer">
                <span className="flex items-center gap-1">
                  Job Bootcamp <RiArrowDropDownLine size={30} />
                </span>

                {/* Dropdown content */}
                <div className="absolute top-full left-0 mt-2 bg-white rounded-b-xl shadow-lg px-6 py-4 w-[380px] hidden group-hover:block z-50">
                  <p className="text-[13px] font-semibold text-gray-500 mb-4">
                    For graduates
                  </p>

                  {/* Item 1 */}
                  <div className="flex items-start gap-3 mb-4">
                    <img
                      src={fswdImg}
                      alt="FSWD"
                      className="h-8 w-8 object-contain mt-1"
                    />
                    <div>
                      <h4 className="text-[15px] font-medium text-black leading-tight">
                        Full Stack Web Development with GenAI
                      </h4>
                      <p className="text-[11px] text-blue-500">
                        Certified by Coding Ninjas
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-3">
                    <img
                      src={dataImg}
                      alt="Data Analytics"
                      className="h-8 w-8 object-contain mt-1"
                    />
                    <div>
                      <h4 className="text-[15px] font-medium text-black leading-tight">
                        Data Analytics with GenAI
                      </h4>
                      <p className="text-[11px] text-blue-500">
                        Certified by Coding Ninjas
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Other menu items */}
              <li className="flex items-center gap-1 cursor-pointer">
                IIT Certifications <RiArrowDropDownLine size={30} />
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                New Launches <RiArrowDropDownLine size={30} />
              </li>
            </ul>
          </div>

          {/* Login Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
            Login
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
