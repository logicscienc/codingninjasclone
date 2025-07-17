import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";;

const faqs = [
  { question: "What are the benefits of joining this program?", answer: "You get access to industry-relevant training, expert mentors, career services, and a structured learning path." },
  { question: "What is the eligibility criteria?", answer: "Anyone interested in learning programming and building a career in tech can apply. No prior experience is required." },
  { question: "Do I need a Computer Science degree or a B.Tech to apply?", answer: "No, the program is open to all graduates and professionals regardless of their academic background." },
  { question: "What is the program duration?", answer: "The program typically takes around 6 months to complete, depending on your pace." },
  { question: "What is the mode of learning?", answer: "The course is completely online with flexible learning hours." },
  { question: "What kind of support will I get if I have queries while learning?", answer: "You will have access to a dedicated support team, teaching assistants, and live doubt-clearing sessions." }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center bg-[#2d3e5e] py-12 px-4">
      <div className="max-w-[1000px] w-full">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
          Frequently Asked Question
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-md">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-100"
              >
                {item.question}
                {openIndex === index ? (
                  <MdKeyboardArrowUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <MdKeyboardArrowDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
