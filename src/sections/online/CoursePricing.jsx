import React, {useState} from "react";
import { FaCheck } from "react-icons/fa6";
import ApplyModal from "../sharedSections/ApplyModal";

const features = [
  "Guest lectures by IIT faculty",
  "1:1 live doubt support (Unlimited)",
  "Relationship manager",
  "1:1 Domain Expert Sessions",
  "Full fees refundable within 7 days",
  "Orientation at E&ICT IIT Guwahati",
  "Graduation ceremony at E&ICT IIT Guwahati",
];

const CoursePricing = () => {
     const [showModal, setShowModal] = useState(false);
  return (
    <>
    {showModal && <ApplyModal onClose={() => setShowModal(false)} />}
    <section className="bg-white py-16 px-4">
      <div className="max-w-[600px] mx-auto text-center">
        {/* Heading */}
        <h4 className="text-xs text-blue-600 font-semibold tracking-wide uppercase mb-2">
          Course Pricing
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          One plan for every learner
        </h2>

        {/* Pricing Card */}
        <div className="border border-gray-200 rounded-2xl shadow-md text-left p-6 md:p-8">
          {/* Title */}
          <h3 className="text-lg font-bold mb-6">
            PG Certification in Data Analytics with GenAI
          </h3>

          {/* Features List */}
          <ul className="space-y-4 mb-6">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <FaCheck className="text-green-500 mt-1 text-lg" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <hr className="my-6 border-gray-200" />

          {/* Price Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xl font-semibold text-black">₹1,60,000/-</p>
              <p className="text-sm text-gray-500">EMI starting at ₹ 5911/ month</p>
            </div>
            <button 
            onClick={() => setShowModal(true)}
            className="bg-orange-500 text-white font-medium px-5 py-2.5 rounded-md hover:bg-orange-600 transition cursor-pointer">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CoursePricing;
