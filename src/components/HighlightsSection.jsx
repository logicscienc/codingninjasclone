import React, { useEffect, useRef, useState } from "react";
import bootcampicon from "../assets/bootcampicon.svg";
import frame from "../assets/frame.svg";
import output from "../assets/output.webp";
import scratch from "../assets/scratch.svg";
import space from "../assets/space.webp";
import dataImg from "../assets/dataImg.svg";
import fswdImg from "../assets/fswdImg.svg";
import iitDataImg from "../assets/iitDataImg.svg";
import { FaMeta } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import chatgpt from "../assets/chatgpt.png";
import { FaPython } from "react-icons/fa6";
import nodecloud from "../assets/nodecloud.png";
import OIP from "../assets/OIP.jpeg";
import { FaNetworkWired } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import powerbi from "../assets/powerbi.jpg";
import workflow from "../assets/workflow.avif";
import { BiLogoJavascript } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import cpp from "../assets/cpp.jpeg";
import circle from "../assets/circle.png";
import group from "../assets/group.png";
import icon from '../assets/icon.svg';

const HighlightsSection = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const sectionRef = useRef(null);
  const itCertRef = useRef(null);
  const [itCertTop, setItCertTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (sectionTop >= window.innerHeight - 100) {
        setScrollHeight(0);
      } else if (sectionTop + sectionHeight <= 0) {
        setScrollHeight(100);
      } else {
        const progress = Math.min(
          100,
          Math.max(
            0,
            ((window.innerHeight - sectionTop - 100) / sectionHeight) * 100
          )
        );
        setScrollHeight(progress);
      }

      if (itCertRef.current && sectionRef.current) {
        const itTop =
          itCertRef.current.getBoundingClientRect().top + window.scrollY;
        const sectionTopY =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        setItCertTop(itTop - sectionTopY);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex justify-center bg-white py-20"
    >
      {/* Vertical dotted line section */}
      <div className="absolute top-0 left-1/2 -translate-x-[500px] h-full z-10">
        <div className="relative h-full w-[2px]">
          {/* Dotted line */}
          <div className="absolute top-0 left-0 h-full border-l-2 border-dotted border-gray-500 z-0" />

          {/* Scroll black line */}
          <div
            className="absolute top-0 left-0 w-full bg-black z-10 transition-all duration-500 ease-in-out"
            style={{ height: `${scrollHeight}%` }}
          />

          {/* Bootcamp icon positioned correctly */}
          <img
            src={bootcampicon}
            alt="Bootcamp Icon"
            className="absolute top-[120px] left-[1px] -translate-x-1/2 w-8 h-8 z-50 bg-white p-1 rounded-full shadow"
          />

          {/* IT Certifications aligned icon */}
          {itCertTop > 0 && (
            <img
              src={frame}
              alt="IT Certifications Icon"
              className="absolute -left-3 w-9 h-9 z-50 bg-white p-1 rounded-full shadow-md border border-gray-300"
              style={{ top: `${itCertTop - 4}px` }}
            />
          )}
        </div>
      </div>
      {/* Icon at the bottom of the dotted line */}
      <img
        src={scratch} // or any other image you want to use
        alt="Bottom Icon"
        className="absolute bottom-[-60px] left-[1px] -translate-x-1/2 w-8 h-8 z-50 bg-white p-1 rounded-full shadow"
      />

      {/* Main content */}
      <div className="relative max-w-[1000px] w-full px-4 z-20">
        {/* Watermark heading */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
          <h2 className="text-[120px] font-extrabold text-gray-200 opacity-20 select-none leading-none tracking-widest">
            OUR OFFERINGS
          </h2>
        </div>

        {/* Job Bootcamp section */}
        <div className="relative z-10 pl-8 pt-10">
          <div className="flex items-center mb-6">
            <h3 className="text-xl font-semibold">Job Bootcamp</h3>
            <span className="ml-3 bg-gray-100 text-sm px-2 py-1 rounded-full">
              For graduates
            </span>
          </div>

          {/* Offer cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-[#f5f8ff] rounded-xl p-6 shadow-sm hover:shadow-md transition ">
              <div className="flex items-center gap-3 mb-4">
                <img src={fswdImg} alt="Full Stack" className="w-14 h-14" />
                <h4 className="text-xl font-semibold">
                  Full Stack Development with GenAI
                </h4>
              </div>
              <div className="text-sm text-gray-600 flex justify-between">
                <span>140+ Hrs of content</span>
                <span>600+ Problems</span>
                <span>10k+ Learners</span>
              </div>
            </div>

            <div className="bg-[#f5f8ff] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <img src={dataImg} alt="Data Analytics" className="w-14 h-14" />
                <h4 className="text-xl font-semibold">
                  Data Analytics with GenAI
                </h4>
              </div>
              <div className="text-sm text-gray-600 flex justify-between">
                <span>100+ Hrs of content</span>
                <span>300+ Problems</span>
                <span>2000+ Learners</span>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <div className=" mb-6">
              <h3 ref={itCertRef} className="text-xl font-semibold">
                IT Certifications
              </h3>
              <span className="inline-block mt-2 bg-[#5E452B] text-white text-sm px-4 py-1 rounded-full">
                For graduates
              </span>
            </div>
            {/* row 1 - 2 cards */}
            <div className="flex flex-wrap gap-6 mb-8">
              {/* card 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden relative border border-orange-300 w-[280px] h-[400px] flex flex-col justify-between">
                <div className="relative px-2 pt-2">
                  <img
                    src={space}
                    alt="Banner"
                    className="w-full h-36 object-cover opacity-90 rounded-b-xl"
                  />
                  <div className="absolute -bottom-6 left-4 bg-white p-1 rounded-md shadow-md">
                    <img src={iitDataImg} alt="Logo" className="w-10 h-10" />
                  </div>
                </div>
                <div className="pt-8 pb-4 px-4">
                  <h4 className="text-lg font-bold">
                    PG Certification in Data Analytics with GenAI
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    E&ICT Academy, IIT Guwahati
                  </p>
                </div>
                <div className="px-4 pb-4 flex justify-start items-center text-sm text-gray-500">
                  <div className="flex gap-2">
                    <img src={chatgpt} alt="icon" className="w-6 h-6" />

                    <FaMeta className="w-6 h-6 text-blue-600" />
                    <SiGoogleanalytics className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="ml-auto text-gray-600">6 months</span>
                </div>
              </div>

              {/* Card 2 */}

              <div className="bg-white rounded-xl shadow-md overflow-hidden relative border border-orange-300 w-[280px] h-[400px] flex flex-col justify-between">
                <div className="relative px-2 pt-2">
                  <img
                    src={space}
                    alt="Banner"
                    className="w-full h-36 object-cover opacity-90 rounded-xl"
                  />
                  <div className="absolute -bottom-6 left-4 bg-white p-1 rounded-md shadow-md">
                    <img src={iitDataImg} alt="Logo" className="w-10 h-10" />
                  </div>
                </div>
                <div className="pt-8 pb-4 px-4">
                  <h4 className="text-lg font-bold">
                    PG Certification in Data Science with GenAI
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    E&ICT Academy, IIT Guwahati
                  </p>
                </div>
                <div className="px-4 pb-4 flex justify-start items-center text-sm text-gray-500">
                  <div className="flex gap-2">
                    <FaPython className="w-6 h-6 " />
                    <img src={nodecloud} alt="icon" className="w-6 h-6" />
                    <img src={OIP} alt="icon" className="w-6 h-6" />
                  </div>
                  <span className="ml-auto text-gray-600">9 months</span>
                </div>
              </div>
            </div>

            {/* for college students tag */}
            <div className="flex items-center mb-6">
              <span className="ml-1 bg-[#5E452B] text-white  text-sm  px-3 py-1 rounded-full">
                For college students
              </span>
            </div>

            {/* row 2 - 3 cards */}
            <div className="flex flex-wrap gap-6 mb-8">
              {/* card 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden relative border border-orange-300 w-[280px] h-[400px] flex flex-col justify-between">
                <div className="relative px-2 pt-2">
                  <img
                    src={output}
                    alt="Banner"
                    className="w-full h-36 object-cover opacity-90 rounded-b-xl"
                  />
                  <div className="absolute -bottom-6 left-4 bg-white p-1 rounded-md shadow-md">
                    <img src={group} alt="Logo" className="w-10 h-10" />
                  </div>
                </div>
                <div className="pt-8 pb-4 px-4">
                  <h4 className="text-lg font-bold">
                    Training in Advanced DSA
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    IITM Pravartak, TIH IIT Madras
                  </p>
                </div>
                <div className="px-4 pb-4 flex justify-start items-center text-sm text-gray-500">
                  <div className="flex gap-2">
                    <img src={circle} alt="icon" className="w-6 h-6" />
                    <img src={workflow} alt="icon" className="w-6 h-6" />

                    <FaDatabase className="w-6 h-6 text-blue-600" />
                    <img src={cpp} alt="icon" className="w-6 h-6" />
                  </div>
                  <span className="ml-auto text-gray-600">4 months</span>
                </div>
              </div>

              {/* card 4 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden relative border border-orange-300 w-[280px] h-[400px] flex flex-col justify-between">
                <div className="relative px-2 pt-2">
                  <img
                    src={space}
                    alt="Banner"
                    className="w-full h-36 object-cover opacity-90 rounded-b-xl"
                  />
                  <div className="absolute -bottom-6 left-4 bg-white p-1 rounded-md shadow-md">
                    <img src={iitDataImg} alt="Logo" className="w-10 h-10" />
                  </div>
                </div>
                <div className="pt-8 pb-4 px-4">
                  <h4 className="text-lg font-bold">
                    Training in Data Analytics
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">IIT Guwahati</p>
                </div>
                <div className="px-4 pb-4 flex justify-start items-center text-sm text-gray-500">
                  <div className="flex gap-2">
                    <PiMicrosoftExcelLogoBold className="w-6 h-6 text-green-700" />
                    <SiMysql className="w-6 h-6 text-orange-500" />
                    <FaPython className="w-6 h-6 " />
                    <img src={powerbi} alt="icon" className="w-6 h-6" />
                  </div>
                  <span className="ml-auto text-gray-600">6 months</span>
                </div>
              </div>

              {/* card 5 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden relative border border-orange-300 w-[280px] h-[400px] flex flex-col justify-between">
                <div className="relative px-2 pt-2">
                  <img
                    src={output}
                    alt="Banner"
                    className="w-full h-36 object-cover opacity-90 rounded-b-xl"
                  />
                  <div className="absolute -bottom-6 left-4 bg-white p-1 rounded-md shadow-md">
                    <img src={group} alt="Logo" className="w-10 h-10" />
                  </div>
                </div>
                <div className="pt-8 pb-4 px-4">
                  <h4 className="text-lg font-bold">
                    Full Stack Web Development
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    IITM Pravartak, TIH IIT Madras
                  </p>
                </div>
                <div className="px-4 pb-4 flex justify-start items-center text-sm text-gray-500">
                  <div className="flex gap-2">
                    <FaNetworkWired className="w-6 h-6 text-blue-600" />
                    <img src={circle} alt="icon" className="w-6 h-6" />
                    <IoLogoNodejs className="w-6 h-6 text-green-500" />
                    <BiLogoJavascript className="w-6 h-6 text-yellow-500" />
                  </div>
                  <span className="ml-auto text-gray-600">9 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Aligned label with dotted line end */}
        <div className="relative mt-32">
          <div className="flex items-center gap-3 ml-[calc(50%-500px+8px)]">
            <img
              src={scratch}
              alt="New Launches"
              className="w-20 h-20 bg-white p-1 rounded-full shadow"
            />
            <h3 className="text-base font-semibold whitespace-nowrap">
              New Launches
            </h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              For graduates
            </span>
          </div>
        </div>

        {/* New Launch card */}
        <div className="bg-[#f5f8ff] rounded-xl p-6 shadow-md w-full max-w-[720px] mx-auto mt-16">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">
              <img src={icon} alt="Icon" className="w-8 h-8" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold">
              Advanced Certification in GenAI & Multi Agent Systems
            </h4>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-6 px-4">
            <span>100+ Hrs of content</span>
            <span>300+ Problems</span>
            <span>500+ Learners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
