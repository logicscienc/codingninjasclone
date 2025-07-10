import React from 'react';
import tag from '../assets/tag.webp';
import paypal from '../assets/paypal.webp';
import razorpay from '../assets/razorpay.webp';
import upi from '../assets/upi.webp';
import visa from '../assets/visa.webp';

const Footer2 = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-[1000px] mx-auto mt-20 mb-20">

        {/* Important Links Section */}
        <h2 className="text-lg font-bold mb-6">Important Links</h2>
        <div className="space-y-4 text-sm">

          {/* Job Bootcamp */}
          <div className="flex flex-col sm:flex-row gap-2">
            <span className="font-medium min-w-[220px]">Job Bootcamp for professionals</span>
            <div className="space-x-3">
              <a href="#" className="text-blue-400 underline" target="_blank">Web Development Bootcamp (MERN & Springboot)</a>
              <span>|</span>
              <a href="#" className="text-blue-400 underline" target="_blank">Data Analytics Job Bootcamp</a>
            </div>
          </div>

          {/* IIT Certifications for Professionals */}
          <div className="flex flex-col sm:flex-row gap-2">
            <span className="font-medium min-w-[220px]">IIT Certifications for Professionals</span>
            <a href="#" className="text-blue-400 underline" target="_blank">
              PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati
            </a>
          </div>

          {/* IIT Certifications for Students */}
          <div className="flex flex-col sm:flex-row gap-2">
            <span className="font-medium min-w-[220px]">IIT Certifications for Students</span>
            <div className="space-x-3">
              <a href="#" className="text-blue-400 underline" target="_blank">
                Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati
              </a>
              <span>|</span>
              <a href="#" className="text-blue-400 underline" target="_blank">
                Training and Internship Certification in Advanced DSA by E&ICT Academy, IIT Guwahati
              </a>
            </div>
          </div>

          {/* Payment Options */}
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-4">
            <span className="font-medium min-w-[220px]">We accept payments using:</span>
            <div className="flex flex-wrap gap-2 items-center">
              <img src={visa} alt="Visa" className="h-6" />
              <img src={paypal} alt="PayPal" className="h-6" />
              <img src={upi} alt="UPI" className="h-6" />
              <span className="bg-gray-100 text-black px-2 py-1 rounded text-xs">No Cost EMI</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">100% safe & secure payment</span>
              <img src={razorpay} alt="Razorpay" className="h-6" />
            </div>
          </div>
        </div>

        {/* Light Sweep Animation Text */}
        <div className="py-12 text-center mt-10">
          <h1 className="text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-white to-gray-600 animate-sweep bg-[length:400%]">
            Coding Ninjas
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer2
