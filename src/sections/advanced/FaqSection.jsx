import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import nsdc from "../sharedSections/images/nsdc.webp";
import RequestCallbackButton from "../sharedSections/RequestCallbackButton";

const faqData = [
  {
    question:
      "What is the Advanced Certification in Gen AI and Multi-Agent Systems?",
    answer:
      "The Advanced Certification in GenAI and Multi-Agent Systems is a 6-month live training program designed for working professionals from technical backgrounds. The course focuses on real-world applications of Generative AI, LLMs, and autonomous agent systems through hands-on projects, 1:1 mentorship, and expert-led sessions. It includes access to the NSDC job portal and more to help you transition into cutting-edge AI roles.",
  },
  {
    question:
      "What is the duration and mode of the GenAI certification program?",
    answer:
      "This is a 6-month live online program. You will learn through expert-led sessions and get 1:1 real-time doubt support.",
  },
  {
    question:
      "Who is eligible to enroll in this GenAI and Multi-Agent Systems course?",
    answer:
      "The program is best suited for working professionals from technical domains (e.g., developers, analysts, engineers) who want to upskill in the latest advancements in Generative AI and Autonomous Agent Systems.",
  },
  {
    question: "Do I need a computer science degree to apply?",
    answer:
      "No. If you're working in a technical domain and are eager to learn the latest advancements in technology, especially in Generative AI and Multi-Agent Systems, you're welcome to join. A formal computer science degree is not mandatory.",
  },
  {
    question:
      "I’m a working professional in tech, but I’m feeling stuck. GenAI is changing everything — and I feel left behind. Will this certification actually help me?",
    answer:
      "Yes, you are eligible to apply for the program. Once you are enrolled, our team will focus on upskilling you to help you land a better-paying job.",
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
