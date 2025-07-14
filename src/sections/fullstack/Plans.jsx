import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import bootspring from "./images/bootspring.svg";
import mern from "./images/mern.png";
import ApplyModal from "./ApplyModal";

const perks = [
  "Industry-standard curriculum by expert",
  "Self Paced Classes",
  "1:1 live doubt support (Unlimited)",
  "Live Doubt Class",
  "Relationship manager",
  "Dedicated, focused, personalised placement assistance.",
  "Peer Interaction and network building",
  "1:1 Domain Expert Sessions",
  "Full fees refundable within 7 days",
];

const Plans = () => {
  const [selected, setSelected] = useState("MERN");
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <ApplyModal onClose={() => setShowModal(false)} />}
      <div className="max-w-[1000px] mx-auto px-4 py-12">
        {/* Toggle */}
        <div className="flex justify-center mt-12 mb-6">
          <div className="flex bg-blue-200 rounded-full p-2">
            <button
              onClick={() => setSelected("MERN")}
              className={`flex items-center px-10 py-4 gap-4 text-lg font-semibold rounded-full transition ${
                selected === "MERN"
                  ? "bg-white shadow text-black"
                  : "text-gray-500"
              }`}
            >
              <img src={mern} alt="mern" className="w-6 h-6" />
              MERN
            </button>
            <button
              onClick={() => setSelected("Springboot")}
              className={`flex items-center px-10 py-4 gap-4 text-lg font-semibold rounded-full transition ${
                selected === "Springboot"
                  ? "bg-white shadow text-black"
                  : "text-gray-500"
              }`}
            >
              <img src={bootspring} alt="springboot" className="w-6 h-6" />
              Springboot
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 bg-gray-100 px-6 py-4 font-semibold text-sm">
            <div className="text-xl">Perks</div>
            <div className="text-right">
              <div className="text-xl">Coding Ninjas Job Bootcamp</div>
              <div className="text-md text-gray-500 font-normal">
                to help you with a faster career <br /> transition to the tech
                field
              </div>
            </div>
          </div>

          {perks.map((perk, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-2 px-6 py-4 text-sm ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div>{perk}</div>
              <div className="flex justify-end text-blue-600">
                <FaCheck className="mt-1 text-xl" />
              </div>
            </div>
          ))}

          {/* Price and Button */}
          <div className="px-6 py-6 bg-white text-center space-y-2">
            <p className="text-sm text-gray-500">Price as low as</p>
            <p className="text-2xl font-semibold">
              ₹7204 <span className="text-sm font-normal">/ month</span>
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FC652D] text-white px-6 py-2 rounded-md hover:bg-[#e35a24] transition cursor-pointer "
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
