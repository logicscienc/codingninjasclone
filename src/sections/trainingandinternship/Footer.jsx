import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#111] to-[#1e293b] text-white py-12 px-4">
      <div className="max-w-[1000px] mx-auto border-t border-gray-300 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-white mb-4">Coding Ninjas</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Pricing & refund policy</a></li>
            <li><a href="#">Bug bounty</a></li>
            <li><a href="#">Review</a></li>
            <li><a href="#">Press release</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-white mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Job Bootcamp</a></li>
            <li><a href="#">Code360</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-white mb-4">Community</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">10X Club</a></li>
            <li><a href="#">Student Chapters</a></li>
            <li><a href="#">Hire from us</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-white mb-4">Contact us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={16} /> 1800-123-3598
            </li>
            <li className="flex items-center gap-2">
              <IoMdMail size={16} /> contact@codingninjas.com
            </li>
          </ul>

          <hr className="my-4 border-gray-400" />

          <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
            <a href="https://www.instagram.com/coding.ninjas/" target="_blank" className="flex items-center gap-1 hover:text-white">
              <BsInstagram size={16} /> Instagram
            </a>
            <a href="https://www.facebook.com/codingninjas" target="_blank" className="flex items-center gap-1 hover:text-white">
              <FaFacebookSquare size={16} /> Facebook
            </a>
            <a href="https://www.linkedin.com/school/codingninjas/" target="_blank" className="flex items-center gap-1 hover:text-white">
              <FaLinkedin size={16} /> Linkedin
            </a>
            <a href="https://x.com/CodingNinjasOff" target="_blank" className="flex items-center gap-1 hover:text-white">
              <FaTwitter size={16} /> X (Twitter)
            </a>
            <a href="https://www.youtube.com/c/CodingNinjasIndia" target="_blank" className="flex items-center gap-1 hover:text-white">
              <IoLogoYoutube size={16} /> Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
