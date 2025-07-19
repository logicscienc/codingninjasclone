import React from 'react';
import certificate from './img/certificate.webp';
import icon1 from './img/icon1.webp';
import icon2 from './img/icon2.webp';
import icon3 from './img/icon3.webp';

const CertificateHighlight = ({ onDownloadClick }) => {
  return (
     <div className="max-w-[800px] mx-auto px-4 py-10 bg-[#f9f8f6]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <img src={certificate} alt="Certificate" className="w-48 mx-auto md:mx-0 mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold leading-snug">
            Own your place in the future,{" "}
            <span className="text-orange-500 font-bold">get certified</span>
            <br /> with E&ICT IITG
          </h2>
          <button
           onClick={onDownloadClick} 
           className="mt-6 px-6 py-2 border border-black rounded-md text-sm font-medium hover:bg-black hover:text-white transition">
            Download full curriculum
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 space-y-6">
          <div className="flex items-start gap-4">
            <img src={icon1} alt="Icon" className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold text-lg">9 LPA avg salary</p>
              <p className="text-sm text-gray-500">Glassdoor</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src={icon2} alt="Icon" className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold text-lg">1 million new jobs by 2026</p>
              <p className="text-sm text-gray-500">Economic times</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src={icon3} alt="Icon" className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold text-lg">52% growth in job posting</p>
              <p className="text-sm text-gray-500">Economic times</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src={icon1} alt="Icon" className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold text-lg">51% skill gap</p>
              <p className="text-sm text-gray-500">NASSCOM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateHighlight
