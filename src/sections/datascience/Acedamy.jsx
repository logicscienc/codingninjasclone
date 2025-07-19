import React from "react";
import uni from "./img/uni.jpg";     
import iitg from "./img/iitg.png"; 
import c from './img/c.svg';
import alumni from './img/alumni.webp';
import campus from './img/campus.webp';
import curriculam from './img/curriculam.webp';
import graduation from './img/graduation.jpg';
import vector from './img/vector.webp';  
import RequestCallbackButton from '../sharedSections/RequestCallbackButton';

const Academy = ({  handleCurriculumClick  }) => {
  return (
    <div id="ac" className="max-w-[1000px] mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        The Coding Ninjas and E&ICT Academy, IIT Guwahati partnership
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="flex-1">
          <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
            Coding Ninjas has developed this program in partnership with E&ICT Academy, IIT Guwahati.
            E&ICT Academy is an initiative of MeitY (Ministry of Electronics and Information Technology, Govt. of India) 
            formed with an aim to develop state-of-the-art training facilities for professionals.
          </p>

        
          <div className="flex items-center gap-4 mt-4">
            <img src={iitg} alt="Coding Ninjas & E&ICT Academy" className="h-8 object-contain" />
             <img src={c} alt="Coding Ninjas & E&ICT Academy" className="h-8 object-contain" />
          </div>
        </div>

        
        <div className="flex-1">
          <img
            src={uni}
            alt="IIT Guwahati"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
       <div>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 mt-6">
          Collaboration with E&ICT Academy, IIT Guwahati opens doors to
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">

          <div className="bg-black p-4 rounded-xl flex-1">
            <img
              src={graduation}
              alt="PG Certificate"
              className="rounded-md w-full"
            />
            <p className="text-center text-orange-600 mt-4 text-sm md:text-base font-medium">
              PG certificate from E&ICT Academy, IIT Guwahati
            </p>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <FeatureCard
              icon={curriculam}
              text="AI-infused curriculum co-designed with IIT faculty"
            />
            <FeatureCard
              icon={alumni}
              text="Earn an E&ICT Academy, IIT Guwahati alumni status"
            />
            <FeatureCard
              icon={campus}
              text="Orientation, Graduation ceremony at E&ICT, IIT Guwahati campus"
            />
            <FeatureCard
              icon={vector}
              text="Guest lectures by IIT faculty"
            />
          </div>
        </div>

        
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <RequestCallbackButton/>
          <button 
           onClick={handleCurriculumClick}
          className="bg-[#FC652D] text-white px-6 py-2 rounded-md hover:bg-[#e35a24] transition text-sm md:text-base">
            View curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, text }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4">
    <img src={icon} alt="feature" className="h-8 w-8 object-contain" />
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);


export default Academy;

