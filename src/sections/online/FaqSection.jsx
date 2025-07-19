import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import nsdc from "../sharedSections/images/nsdc.webp";
import RequestCallbackButton from "../sharedSections/RequestCallbackButton";

const faqData = [
  {
    question:
      "What are the benefits of joining PG in Data Analytics by E&ICT IIT Guwahati",
    answer:
      "Learn through an advanced, AI-focused curriculum designed with IIT faculty. Enjoy benefits like an on-campus graduation ceremony and access to guest lectures from IIT professors.",
  },
  {
    question:
      "What is the eligibility criteria for the PG in Data Analytics program?",
    answer:
      "To enroll, you’ll need a bachelor’s degree in any field.",
  },
  {
    question:
      "What is E&ICT IIT Guwahati?",
    answer:
      "Coding Ninjas has developed this program in partnership with E&ICT Academy of IIT Guwahati. E&ICT Academy is an initiative of MeitY (Ministry of Electronics and Information Technology, Govt. of India) formed with an aim to develop state-of-the-art training facilities for professionals.",
  },
  {
    question: "What is the duration of the E&ICT IIT Guwahati Data Analytics PG program?",
    answer:
      "The PG in Data Analytics program by E&ICT IIT Guwahati has a duration of 6 months. However, learners will have access to all course content and resources for 21 months from the batch start date, making it one of the most flexible E&ICT - IIT Guwahati Data Analytics programs available.",
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
        <p className="text-sm text-center text-blue-300">BEFORE YOU ASK</p>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Here’s what you need to know
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
      
    </div>
  );
};

export default FaqSection;