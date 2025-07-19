import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import nsdc from "../sharedSections/images/nsdc.webp";
import RequestCallbackButton from "../sharedSections/RequestCallbackButton";

const faqData = [
  {
    question:
      "What are the benefits of joining the E&ICT, IIT Guwahati PG Certification?",
    answer:
      "Earn your Data Science PG Certification from IIT Guwahati in just 9 months and get an Alumni Status. Learn through an advanced, AI-focused curriculum designed with IIT faculty. Enjoy benefits like an on-campus orientation, Graduation ceremony and access to guest lectures from IIT professors.",
  },
  {
    question:
      "What is the eligibility criteria?",
    answer:
      "To enroll, you’ll need a bachelor’s degree in any field.",
  },
  {
    question:
      "Is a background in Computer Science required to apply?",
    answer:
      "A bachelor’s degree in any discipline is required, but it does not need to be in Computer Science or any specific field.",
  },
  {
    question: "What is the duration of the E&ICT, IIT Guwahati PG Certification?",
    answer:
      "The program duration is 9 months, but you'll have access to the course content for 21 months from your batch start date.",
  },
  {
    question:
      "What is the mode of learning?",
    answer:
      "Classes are conducted online in live mode. The *Live Learning* mode includes three live sessions per week along with access to class recordings. The *Blended Learning* mode provides full access to pre-recorded materials, allowing for more flexible learning. Both modes feature regular assignments, tests, and unlimited 1:1 doubt support to ensure a personalized learning experience.",
  },
];

const FaqSection = ({ handleCurriculumClick }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="faqs" className="max-w-[1000px] mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left text-base md:text-lg font-medium hover:text-orange-500 transition"
            >
              <span>{item.question}</span>
              <span className="ml-4 text-lg">
                {openIndex === index ? <RxCross1 /> : <LuPlus />}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <RequestCallbackButton />

        <button
           onClick={handleCurriculumClick}
          className="px-6 py-2 bg-[#FC652D] text-white rounded hover:bg-[#e35a24] transition"
        >
          View Curriculum
        </button>
      </div>
      <div className="mt-16 p-6 border rounded-xl flex flex-col md:flex-row items-center gap-6">
        <img
          src={nsdc}
          alt="NSDC Certificate"
          className="w-full md:w-[280px] rounded-md"
        />
        <p className="text-lg font-medium text-center md:text-left">
          We are an approved training partner of NSDC under their scheme for
          market led fee-based services
        </p>
      </div>
    </div>
  );
};

export default FaqSection;