import React from "react";
import meeting from "../trainingandinternship/img/meeting.jpg";
import graduation from "../trainingandinternship/img/graduation.jpg";
import happy1 from "../trainingandinternship/img/happy1.jpg";
import Happy2 from "../trainingandinternship/img/Happy2.jpg";
import Happy3 from "../trainingandinternship/img/Happy3.jpg";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { PiPaintBrushBroadThin } from "react-icons/pi";
import { BsHandbagFill } from "react-icons/bs";

const Succeed = ({ onCallbackClick }) => {
  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-20">
      {/* Section 1 */}
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Feel like <span className="text-blue-600 font-bold">Elite</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Immerse yourself in your amazing success journey
          </p>
          <ul className="space-y-4 text-gray-700 text-[15px]">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <FaUniversity className="text-blue-600 mt-1" />
              <span>
                Experience <span className="text-red-400 font-medium">Orientation Ceremony</span> at IITM Pravartak campus
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <PiPaintBrushBroadThin className="text-blue-600 mt-1" />
              <span>
                Benefit from the <span className="text-red-400 font-medium">Advanced Curriculum</span> co-designed with IITM faculties
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <FaGraduationCap className="text-blue-600 mt-1" />
              <span>
                Get access to <span className="text-red-400 font-medium">Guest Lectures</span> by IITM Pravartak
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <BsHandbagFill className="text-blue-600 mt-1" />
              <span>
                Receive an <span className="text-red-400 font-medium">Admission Letter</span> to solidify your connection
              </span>
            </li>
          </ul>
          <a
            href="/enroll"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-700 text-white font-medium px-6 py-2 rounded hover:bg-blue-800 transition w-full sm:w-auto text-center"
          >
            Enrol Now
          </a>
        </div>

        {/* Right */}
        <div>
          <img src={graduation} alt="Elite Experience" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Succeed like <span className="text-blue-600 font-bold">Top 1%</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Unlock the path to success with the mindset and perseverance of a top achiever.
          </p>
          <ul className="space-y-4 text-gray-700 text-[15px]">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <FaUniversity className="text-blue-600 mt-1" />
              <span>
                Celebrate with a <span className="text-red-400 font-medium">graduation ceremony at IITM Pravartak</span>
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <FaGraduationCap className="text-blue-600 mt-1" />
              <span>
                Connect with <span className="text-red-400 font-medium">10,000+ peers and mentors</span>
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <PiPaintBrushBroadThin className="text-blue-600 mt-1" />
              <span>
                Join <span className="text-red-400 font-medium">Open Source Clubs</span> and grow with professionals
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <BsHandbagFill className="text-blue-600 mt-1" />
              <span>
                Access <span className="text-red-400 font-medium">Career Services</span> from Coding Ninjas post completion
              </span>
            </li>
          </ul>
          <button
            onClick={onCallbackClick}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition mt-4 w-full sm:w-auto"
          >
            Request Callback
          </button>
        </div>

        {/* Right: Responsive Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[meeting, happy1, Happy2, Happy3].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="happy student"
              className="rounded-lg shadow-md w-full h-auto aspect-video object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Succeed;

