import React from "react";
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Logo from "../assets/logo.svg";
import c from "../assets/c.svg";

const Footer1 = () => {
  return (
    <footer className="bg-[#231F20] text-white py-10 ">
      <div className="max-w-[1000px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm mt-20 mb-20">
        {/* Left Section */}
        <div className="space-y-4">
          <img src={Logo} alt="Coding Ninjas Logo" className="h-6" />
          <div>
            <p className="font-semibold mb-1">Contact us</p>
            <div className="flex items-center gap-2">
              <MdCall className="h-8 w-8"/> 1800-123-3598
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope  className="w-8 h-8"/> contact@codingninjas.com
            </div>
          </div>
          <div>
            <p className="font-semibold mb-1">Our offerings</p>
            <div className="flex items-center gap-2">
              <img src={Logo} alt="coding ninjas" className="h-5" />
              <span>/job-bootcamp</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={c} alt="code 360" className="h-5" />
              <span>code360 by codingninjas</span>
            </div>
          </div>
        </div>

        {/* Coding Ninjas Links */}
        <div className="space-y-2">
          <p className="font-semibold mb-1">Coding Ninjas</p>
          <p>Careers</p>
          <p>Privacy policy</p>
          <p>Terms & conditions</p>
          <p>Pricing & refund policy</p>
          <p>Bug bounty</p>
          <p>Review</p>
          <p>Press release</p>
        </div>

        {/* Products */}
        <div className="space-y-2">
          <p className="font-semibold mb-1">Products</p>
          <p>Job Bootcamp</p>
          <p>Code 360</p>
          <p>Professional Certifications</p>
          <p>Student Certifications</p>
        </div>

        {/* Community */}
        <div className="space-y-2">
          <p className="font-semibold mb-1">Community</p>
          <p>10X Club</p>
          <p>Student Chapters</p>
          <p>Hire from us</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1000px] mx-auto mt-8 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-xs text-gray-400 text-center md:text-left">
          Copyright © Sunrise Mentors Pvt. Ltd.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 text-gray-300 text-3xl">
          <a
            href="https://www.instagram.com/coding.ninjas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.facebook.com/codingninjas"
            target="_blank"
            rel="noopener noreferrer"
          >
            < FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/school/codingninjas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/CodingNinjasOff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/c/CodingNinjasIndia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
