import React from 'react'
import result from '../trainingandinternship/img/result.png';

const CertificateSection = () => {
  return (
     <div className="flex flex-col items-center justify-center px-4 py-10 bg-white">
      <div className="max-w-[1000px] w-full flex flex-col md:flex-row items-start gap-10">
        
        {/* Left Section - Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Program <span className="text-blue-600">Certificate</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            IITM Pravartak will award a certificate of successful completion to participants
            who complete the program successfully with 70% of the score in the evaluation.
            You should have watched at least 70% of the course content in your classroom
            to be considered eligible for program completion criteria and receive a
            certificate from IITM Pravartak.
          </p>
          <p className="text-sm text-gray-500 italic">
            Note: All certificate images are for illustrative purposes only and may be subject to change at the discretion of IITM Pravartak.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1">
          <img
            src={result}
            alt="Sample Certificate"
            className="w-full h-auto border rounded shadow-md"
            style={{ boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.25)' }}
          />
        </div>

      </div>
    </div>
  )
}

export default CertificateSection