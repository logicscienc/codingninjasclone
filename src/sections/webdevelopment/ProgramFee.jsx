import React from 'react';
import emi from '../academy/img/emi.png'; // Your logo (e.g., "fibe" or similar)

const programs = [
  {
    id: 1,
    title: 'Full stack web development with Gen AI',
    fee: '₹59,999',
    duration: '6 Months',
    pause: '40 Days',
  },
  {
    id: 2,
    title: 'Full stack web development with Gen AI + DSA',
    fee: '₹79,999',
    duration: '9 Months',
    pause: '60 Days',
  },
];

const ProgramFee = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Join Now, <span className="text-blue-700 underline">Limited</span> seats left
      </h2>

      <div className="space-y-10">
        {programs.map((program) => (
          <div key={program.id} className="border-b pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Fee Box */}
              <div className="bg-blue-700 text-white text-center px-8 py-4 rounded w-full md:w-1/4">
                <p className="font-medium">Total Program Fee</p>
                <p className="text-2xl font-bold mt-1">{program.fee}</p>
              </div>

              {/* Details */}
              <div className="text-center md:text-left md:flex-1">
                <h3 className="text-lg font-bold text-blue-700 mb-1">
                  {program.id}. {program.title}
                </h3>
                <div className="flex justify-center md:justify-start gap-10 mt-2 text-sm">
                  <div>
                    <p className="text-gray-600">Duration</p>
                    <p className="font-semibold">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Course Pause</p>
                    <p className="font-semibold">{program.pause}</p>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <a 
               href="/enroll"
          target="_blank"
          rel="noopener noreferrer"
              className="bg-blue-700 text-white font-medium px-6 py-2 rounded hover:bg-blue-800 transition">
                Enrol Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Booking and EMI Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Booking */}
        <div className="border-2 border-blue-700 text-blue-700 px-6 py-5 rounded w-full md:w-1/3 text-center">
          <p className="font-medium">Book your seat now</p>
          <p className="text-2xl font-bold mt-2">₹2,500</p>
        </div>

        {/* EMI Info */}
        <div className="flex-1">
          <p className="font-semibold text-lg mb-1">Pay in instalments, as low as</p>
          <p className="text-2xl font-bold text-black">₹ 6,458/month</p>
          <p className="text-sm text-gray-600 mt-1 mb-3">No Cost EMI available up to 12 months</p>
          <p className="text-sm text-gray-600">
            We have partnered with the following financial companies to provide competitive finance options at as low as 0% interest.
          </p>

          {/* Partner Logos */}
          <div className="flex items-center gap-6 mt-4">
            <img src={emi} alt="Fibe" className="h-6 object-contain" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramFee;

