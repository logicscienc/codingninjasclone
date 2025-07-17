import React from 'react';

const ProgramFee = ({onEnrollClick}) => {
  return (
    <div className="flex justify-center bg-gray-100 py-10 px-4">
      <div className="max-w-[1000px] w-full text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Join Now, <span className="text-blue-600 font-bold">Limited</span> seats left
        </h2>

        {/* Subheading */}
        <p className="text-gray-700 mb-10">
          This certification course can be availed in 3 different programming languages.
        </p>

        {/* Layout */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-20">
          {/* Fee Box */}
          <div className="bg-blue-600 text-white px-8 py-6 rounded-md shadow-md text-lg font-semibold border border-white">
            <div>Total Program Fee</div>
            <div className="text-2xl font-bold mt-2">₹19,999</div>
          </div>

          {/* Language Options + Button */}
          <div className="flex flex-col items-center gap-8">
            {/* Language Options */}
            <div className="flex gap-10 text-left text-gray-800">
              <div className="space-y-1">
                <h4 className="font-bold">Java</h4>
                <p>English</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold">C++</h4>
                <p>Hinglish</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold">Python</h4>
                <p>English</p>
              </div>
            </div>

            {/* Enroll Button */}
            <button onClick={onEnrollClick} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md">
              Enrol Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramFee;


