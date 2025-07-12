import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";

import Logo from "../../assets/logo.svg";
import fswdImg from "../../assets/fswdImg.svg";
import dataImg from "../../assets/dataImg.svg";
import iitDataImg from "../../assets/iitDataImg.svg";
import icon from "../../assets/icon.svg";
import naukriLogo from "../../assets/naukriLogo.svg";
import googleIcon from "../../assets/googleIcon.svg";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="relative w-full">
        {/* Header Content */}
        <div className="max-w-[1000px] mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <img src={Logo} alt="Coding Ninjas Logo" className="h-8" />
            <ul className="flex gap-6 items-center font-medium text-gray-700">
              {/* Job Bootcamp */}
              <li className="relative group flex items-center gap-1 cursor-pointer">
                <span className="flex items-center gap-1">
                  Job Bootcamp <RiArrowDropDownLine size={30} />
                </span>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-xl p-4 w-[350px] hidden group-hover:block z-50">
                  <p className="text-[13px] font-semibold text-gray-500 mb-4">
                    For graduates
                  </p>

                  {/* Item 1 */}
                  <a
                    href="/fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 mb-4 hover:bg-gray-100 p-2 rounded-md transition"
                  >
                    <img
                      src={fswdImg}
                      alt="FSWD"
                      className="h-8 w-8 object-cover mt-1"
                    />
                    <div>
                      <h4 className="text-[15px] font-medium text-black leading-tight">
                        Full Stack Web Development with GenAI
                      </h4>
                      <p className="text-[11px] text-blue-500">
                        Certified by Coding Ninjas
                      </p>
                    </div>
                  </a>

                  {/* Item 2 */}
                  <div className="flex items-start gap-3">
                    <img
                      src={dataImg}
                      alt="Data Analytics"
                      className="h-8 w-8 object-cover mt-1"
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

              {/* IIT Certifications with full-width dropdown */}
              <li className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  IIT Certifications <RiArrowDropDownLine size={30} />
                </div>

                <div className="absolute top-full left-0 mt-2 w-screen h-[50vh] bg-white rounded-bl-xl shadow-2xl hidden group-hover:flex z-50 px-16 py-10 gap-16">
                  {/* Left Column */}
                  <div className="w-1/4 pr-10">
                    <p className="text-sm text-gray-500 font-semibold mb-6">
                      Category
                    </p>
                    <ul className="space-y-6 text-[15px] text-gray-800 font-medium">
                      <li className="flex justify-between items-center cursor-pointer hover:text-orange-500">
                        For graduates <MdKeyboardArrowRight size={18} />
                      </li>
                      <li className="flex justify-between items-center cursor-pointer hover:text-orange-500">
                        For college students <MdKeyboardArrowRight size={18} />
                      </li>
                    </ul>
                  </div>

                  {/* Right Column - Courses stacked vertically */}
                  <div className="w-3/4 flex flex-col gap-8">
                    <div className="flex gap-4">
                      <img
                        src={iitDataImg}
                        alt="IIT Course"
                        className="h-10 w-10 object-contain"
                      />
                      <div>
                        <p className="text-xs text-gray-500">
                          E&ICT Academy IIT Guwahati
                        </p>
                        <h4 className="text-sm font-medium text-black leading-snug">
                          PG Certification in Data Analytics with GenAI
                        </h4>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <img
                        src={iitDataImg}
                        alt="IIT Course"
                        className="h-10 w-10 object-contain"
                      />
                      <div>
                        <p className="text-xs text-gray-500">
                          E&ICT Academy IIT Guwahati
                        </p>
                        <h4 className="text-sm font-medium text-black leading-snug">
                          PG Certification in Data Science with GenAI
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* New Launches (no dropdown yet) */}
              <li className="relative group flex items-center gap-1 cursor-pointer">
                <span className="flex items-center gap-1">
                  New Launches <RiArrowDropDownLine size={30} />
                </span>

                {/* dropdown */}
                <div className="absolute left-[-120px] top-full mt-2 bg-white rounded-xl shadow-xl p-4 w-[400px] hidden group-hover:block z-50">
                  <p className="text-[13px] font-semibold text-gray-500 mb-4">
                    For graduates
                  </p>

                  {/* Dropdown Item */}
                  <div className="flex gap-3 mb-2">
                    <img
                      src={icon}
                      alt="New Course"
                      className="h-8 w-8 object-cover mt-1"
                    />
                    <div>
                      <h4 className="text-[15px] font-medium text-black leading-tight whitespace-nowrap">
                        Advanced Certification in GenAI & Multi Agent Systems
                      </h4>
                      <p className="text-[11px] text-blue-500">
                        Certified by Coding Ninjas
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Login Button */}
          {isLoggedIn ? (
            <div className="relative flex items-center gap-2">
              <button className="bg-white border border-black hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-semibold">
                My Classroom
              </button>

              {/* Avatar with hover dropdown toggle */}
              <div
                className="relative"
                onMouseEnter={() => setShowProfileDropdown(true)}
                onMouseLeave={() => setShowProfileDropdown(false)}
              >
                <img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${email}`}
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className="absolute top-12 right-0 w-72 bg-white rounded-xl shadow-xl p-6 z-50 transition duration-200 ease-in-out">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${email}`}
                        alt="Profile"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          {name || email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setEmail("");
                          setShowLogin(true); // Reopen login drawer
                          setShowProfileDropdown(false);
                        }}
                        className="text-orange-500 font-semibold hover:underline text-sm"
                      >
                        Logout
                      </button>
                      <p className="text-sm text-gray-500">Asia - Calcutta</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              {" "}
              Login
            </button>
          )}
          {/* Login Drawer */}
          {showLogin && (
            <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm transition-opacity duration-300">
              <div className="bg-white w-[500px] h-screen p-6 shadow-2xl relative transform translate-x-0 animate-slideInRight">
                {/* close Button */}
                <button
                  onClick={() => setShowLogin(false)}
                  className="absolute top-4 right-4 text-gray-600 text-xl"
                >
                  <RxCross2 size={20} />
                </button>

                {/* Content */}
                <img src={Logo} alt="Logo" className="h-6 mb-6" />
                <h2 className="text-lg font-semibold mb-4">Login with</h2>

                <div className="space-y-4 mb-6">
                  <button className="flex items-center justify-center gap-3 w-full border-2 rounded-md py-3 text-base  font-semibold">
                    <img
                      src={googleIcon}
                      alt="naukriLogo"
                      size={20}
                      className="w-6 h-6"
                    />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-3 w-full border-2 rounded-md py-3 text-base  font-semibold">
                    <img
                      src={naukriLogo}
                      alt="naukriLogo"
                      size={20}
                      className="w-6 h-6"
                    />
                    Naukri
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-grow border-t" />
                  <span className="text-sm text-gray-500">OR</span>
                  <div className="flex-grow border-t" />
                </div>
                <label className="text-sm text-gray-700">Enter email</label>
                <input
                  type="email"
                  placeholder="Enter email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 px-4 py-3 rounded-md mt-2 mb-5 text-base"
                />
                <button
                  disabled={!email}
                  onClick={() => {
                    if (email) {
                      setIsLoggedIn(true);
                      setShowLogin(false);
                    }
                  }}
                  className={`w-full py-2 rounded-md font-semibold flex justify-center items-center gap-2 transition-colors ${
                    email
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue <FaArrowRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
