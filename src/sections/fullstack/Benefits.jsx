import React from "react";
import send from "./images/send.webp";
import bag from "./images/bag.webp";
import intervies from "./images/interview.webp";
import job from "./images/job.webp";
import referal from "./images/referal.webp";
import run from "./images/run.webp";
import RequestCallbackButton from "./RequestCallbackButton"; 


const benefits = [
  {
    icon: run,
    title: "Profiles highlighted on hirist.com",
    description: "Get access to an abundance of job openings",
  },
  {
    icon: intervies,
    title: "1200+ Companies Hiring",
    description: "Expanded job search with a vast network of companies hiring.",
  },
  {
    icon: send,
    title: "Profiles highlighted on naukri.com",
    description:
      "Make a distinct mark for yourself on India's leading job portal.",
  },
  {
    icon: referal,
    title: "Dedicated placement team",
    description: "Guiding and motivating you every step of the way.",
  },
  {
    icon: bag,
    title: "50+ Members placement team",
    description:
      "A dedicated team to help you get placed in your dream company.",
  },
  {
    icon: job,
    title: "Job openings shared every day",
    description: "We send job openings daily to your WhatsApp directly",
  },
];

const Benefits = ({ setShowForm }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12 mt-16">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Placement benefits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left gap-3"
          >
            <img src={item.icon} alt={item.title} className="w-8 h-8" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-20">
         <RequestCallbackButton />
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 bg-[#FC652D] text-white rounded-md hover:bg-[#e35a24] transition cursor-pointer"
        >
          Book a free webinar
        </button>
      </div>
    </div>
  );
};

export default Benefits;
