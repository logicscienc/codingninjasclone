
import React from "react";
import bag from "./img/bag.webp";
import hourglass from "./img/hourglass.svg";
import interview from "./img/interview.webp";
import placement from "./img/placement.svg";
import send from "./img/send.svg";
import thumb from "./img/thumb.svg";
 import RequestCallbackButton from '../sharedSections/RequestCallbackButton';



const features = [
  {
    icon: placement,
    title: "GenAI is Everywhere",
    desc: "From coding to content, it's transforming every tech workflow",
  },
  {
    icon: interview,
    title: "LLMs Are the Core",
    desc: "Large Language Models power today’s most advanced AI apps",
  },
  {
    icon: hourglass,
    title: "Talent Demand is Soaring",
    desc: "Top companies are racing to hire GenAI-skilled professionals",
  },
  {
    icon: bag,
    title: "Roles Are Evolving Fast",
    desc: "Traditional tech jobs now require GenAI capabilities",
  },
  {
    icon: send,
    title: "Stay Ahead of Change",
    desc: "Upskill now before your current stack becomes outdated",
  },
  {
    icon: thumb,
    title: "One Program. Full Prep",
    desc: "Master tools, build projects, and get placement support",
  },
];

const Benefits = ({ handleCurriculumClick }) => {
  return (
    <div id="benefits" className="w-full bg-white py-16 ">
      <div className="max-w-[1000px] mx-auto px-4 text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 mt-16">Why GenAI?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={item.icon} alt={item.title} className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-sm md:text-base">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <RequestCallbackButton/>
          <button 
           onClick={handleCurriculumClick}
          className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
            View curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
