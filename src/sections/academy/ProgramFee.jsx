import React from 'react';
import emi from './img/emi.png';

const ProgramFee = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 max-w-[1000px] mx-auto">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Join Now, <span className="text-blue-600 font-bold">Limited</span> seats left
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Boxes */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="border-2 border-blue-600 bg-blue-600 text-white text-center rounded-md py-6 px-4">
            <p className="text-lg">Total Program Fee</p>
            <p className="text-2xl font-bold mt-1">₹79,999</p>
          </div>

          <div className="border-2 border-blue-600 text-blue-600 text-center rounded-md py-6 px-4">
            <p className="text-lg">Book your seat now</p>
            <p className="text-2xl font-bold mt-1">₹2,500</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <p className="text-sm font-semibold mb-2">Pay in instalments, as low as</p>
          <p className="text-3xl font-bold mb-2">₹ 6,458<span className="text-xl">/month</span></p>
          <p className="text-sm font-semibold text-gray-600 mb-2">
            No Cost EMI available up to 12 months
          </p>
          <p className="text-sm text-gray-700 mb-4">
            We have partnered with the following financial companies to provide competitive finance options at as low as 0% interest.
          </p>

          <div className="mb-4">
            <img src={emi} alt="Finance Partners" className="h-6 object-contain" />
          </div>

          <a
           href="/enr"
          target="_blank"
          rel="noopener noreferrer"
           className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all mt-12 ">
            Enrol Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProgramFee
