import React from 'react';
import meeting from '../trainingandinternship/img/meeting.jpg';
import graduation from '../trainingandinternship/img/graduation.jpg';
import happy1 from '../trainingandinternship/img/happy1.jpg';
import Happy2 from '../trainingandinternship/img/Happy2.jpg';
import Happy3 from '../trainingandinternship/img/Happy3.jpg';
import { FaUniversity } from "react-icons/fa";
import { PiPaintBrushBroadThin } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";

const Succeed = ({ onCallbackClick}) => {
  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-20">
      {/* Section 1: Feel like Elite */}
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Feel like <span className="text-blue-600 font-bold">Elite</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Immerse yourself in your amazing success journey
          </p>

          <ul className="space-y-4 text-gray-700 text-[15px]">
            <li className="flex items-start gap-3">
              <FaUniversity className="text-blue-600 mt-1" />
              <span>
                Experience <span className="text-red-400 font-medium">Orientation Ceremony</span> at IITM Pravartak campus
              </span>
            </li>
            <li className="flex items-start gap-3">
              <PiPaintBrushBroadThin className="text-blue-600 mt-1" />
              <span>
                Benefit from the <span className="text-red-400 font-medium">Advanced Curriculum</span> co-designed with IITM Pravartak IIT faculties
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaGraduationCap className="text-blue-600 mt-1" />
              <span>
                Get access to IITM Pravartak IIT faculty <span className="text-red-400 font-medium">Guest Lectures</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsHandbagFill className="text-blue-600 mt-1" />
              <span>
                Get an <span className="text-red-400 font-medium">Admission Letter</span> to solidify your connection to the institution
              </span>
            </li>
          </ul>

          <button  onClick={onCallbackClick} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Request Callback
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={graduation}
            alt="Elite Experience"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 2: Succeed like Top 1% */}
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Succeed like <span className="text-blue-600 font-bold">Top 1%</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Unlock the path to success with the mindset and perseverance of a top achiever.
          </p>

          <ul className="space-y-4 text-gray-700 text-[15px]">
            <li className="flex items-start gap-3">
              <FaUniversity className="text-blue-600 mt-1" />
              <span>
                Celebrate your achievements with a prestigious <span className="text-red-400 font-medium">graduation ceremony at IITM Pravartak campus</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaGraduationCap className="text-blue-600 mt-1" />
              <span>
                Grow your network by connecting with <span className="text-red-400 font-medium">10,000+ peers and 10X mentors</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <PiPaintBrushBroadThin className="text-blue-600 mt-1" />
              <span>
                Get access to and be a part of <span className="text-red-400 font-medium">Open Source Clubs</span> and connect with top professionals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsHandbagFill className="text-blue-600 mt-1" />
              <span>
                <span className="text-red-400 font-medium">Career services</span> post program completion by Coding Ninjas
              </span>
            </li>
          </ul>
          <button 
          onClick={onCallbackClick}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition mt-3">
              Request Callback
            </button>
        </div>

        {/* Right: 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img src={meeting} alt="graduation" className="rounded-lg shadow-md w-full h-auto" />
          <img src={happy1} alt="happy students" className="rounded-lg shadow-md w-full h-auto" />
          <img src={Happy2} alt="happy students" className="rounded-lg shadow-md w-full h-auto" />
          <img src={Happy3} alt="happy students" className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Succeed;