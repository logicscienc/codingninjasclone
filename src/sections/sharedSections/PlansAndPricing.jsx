import React from "react";
import { FaCheck } from "react-icons/fa6";

const perksData = [
  {
    title: "Industry-standard curriculum by expert",
    regular: true,
    weekend: true,
  },
  {
    title: "Live classes",
    regular: true,
    weekend: true,
  },
  {
    title: "1:1 live doubt support",
    regular: true,
    weekend: true,
  },
  {
    title: "Dedicated, focused, personalised placement assistance",
    regular: true,
    weekend: true,
  },
  {
    title: "Relationship manager",
    regular: true,
    weekend: true,
  },
  {
    title: "Full fees refundable within 7 days",
    regular: true,
    weekend: true,
  },
];

const PlansAndPricing = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mt-12 mb-8">
        Plans and Pricing
      </h2>

      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-3 bg-gray-100 px-6 py-4 font-semibold text-sm">
          <div className="text-left text-xl">Perks</div>
          <div className="text-center">
            <div className="text-xl">Regular Classes</div>
            <div className="text-xs text-gray-500 font-normal mt-1">
              Live class on either MWF or TTS of the week
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl">Weekend Classes</div>
            <div className="text-xs text-gray-500 font-normal mt-1">
              Live class on Saturday and Sunday every week
            </div>
          </div>
        </div>

        {perksData.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 px-6 py-4 text-sm ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="text-left">{item.title}</div>
            <div className="text-center text-blue-600">
              {item.regular && <FaCheck className="inline text-lg" />}
            </div>
            <div className="text-center text-blue-600">
              {item.weekend && <FaCheck className="inline text-lg" />}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-3 px-6 py-6 bg-white text-center items-center gap-4">
          <div></div>
          <div>
            <p className="text-sm text-gray-500">Price as low as</p>
            <p className="text-xl font-semibold">
              ₹5911 <span className="text-sm font-normal">/ month</span>
            </p>
            <button className="mt-2 bg-[#FC652D] text-white px-6 py-2 rounded-md hover:bg-[#e35a24] transition">
              Apply now
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-500">Price as low as</p>
            <p className="text-xl font-semibold">
              ₹5911 <span className="text-sm font-normal">/ month</span>
            </p>
            <button className="mt-2 bg-[#FC652D] text-white px-6 py-2 rounded-md hover:bg-[#e35a24] transition">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
