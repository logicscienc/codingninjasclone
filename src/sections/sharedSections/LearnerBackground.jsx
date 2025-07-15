import React from "react";
import RequestCallbackButton from "./RequestCallbackButton";

const data = [
  {
    label: "Service company engineers",
    percent: "41%",
    size: "w-48 h-48 md:w-60 md:h-60",
    border: "border-yellow-500",
    text: "text-white",
    position: "top-10 left-[35%]",
  },
  {
    label: "Final year students",
    percent: "12%",
    size: "w-32 h-32",
    border: "border-red-400",
    text: "text-white",
    position: "top-0 left-4",
  },
  {
    label: "Non CS",
    percent: "14%",
    size: "w-28 h-28",
    border: "border-cyan-400",
    text: "text-white",
    position: "bottom-6 left-8",
  },
  {
    label: "Non technical roles",
    percent: "27%",
    size: "w-40 h-40",
    border: "border-green-400",
    text: "text-white",
    position: "bottom-4 right-10",
  },
  {
    label: "Others",
    percent: "6%",
    size: "w-20 h-20",
    border: "border-indigo-400",
    text: "text-white",
    position: "top-8 right-10",
  },
];

const LearnerBackground = ({ setShowForm }) => {
  return (
    <div className="px-4 py-20 bg-white">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          Our learners bring varied backgrounds and experiences
        </h2>

        {/* Main box */}
        <div className="relative bg-[#0f0f0f] rounded-[3rem] mx-auto w-full max-w-[800px] h-[450px] overflow-hidden">
          {/* Polka dot background */}
          <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-0"></div>

          {/* Circles */}
          {data.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} ${item.size} border ${item.border} rounded-full flex flex-col items-center justify-center shadow-lg p-2 text-center ${item.text}`}
            >
              <p className="text-sm leading-tight px-2">{item.label}</p>
              <p className="text-lg font-semibold">{item.percent}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <RequestCallbackButton/>
          <button 
          onClick={() => setShowForm(true)}
          className="px-6 py-2 bg-[#FC652D] text-white rounded hover:bg-[#e35a24] transition">
            Book a free webinar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnerBackground;

