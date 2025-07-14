import React from "react";
import group1 from "./images/group1.svg";
import group2 from "./images/group2.svg";
import group3 from "./images/group3.svg";
import group4 from "./images/group4.svg";
import duo from "./images/duo.svg";
import git from "./images/git.svg";
import pencil from "./images/pencil.svg";
import video from "./images/video.svg";
import curated from "./images/curated.svg";
import stanford from "./images/stanford.svg";

const benefits = [
  {
    icon: group2,
    title: "1:1 expert session",
    description:
      "Connects theoretical understanding with practical implementation through their insights",
  },
  {
    icon: stanford,
    title: "Expert faculty from MAANG",
    description:
      "Top-tier education enriched by practical knowledge and innovation",
  },
  {
    icon: curated,
    title: "Projects & hackathons",
    description: "Hands-on learning to spark creative problem-solving",
  },
  {
    icon: group3,
    title: "Fastest doubt support",
    description:
      "Personalised assistance for a clear understanding of concepts",
  },
  {
    icon: group1,
    title: "Self-paced classes",
    description: "Learn at your pace with practice and instant feedback",
  },
];

const beyondLearning = [
  {
    icon: git,
    title: "Github profile",
    description: "",
  },
  {
    icon: duo,
    title: "LinkedIn profile",
    description: "",
  },
  {
    icon: video,
    title: "Resume writing",
    description: "",
  },
  {
    icon: pencil,
    title: "Soft skills",
    description: "Master communication and salary negotiation skills.",
  },
  {
    icon: group4,
    title: "Interview preparation",
    description: "Mock interviews and expert sessions.",
  },
];

const JobBootcamp = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
          Job Bootcamp benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-2xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] p-6 w-full max-w-[300px] h-full"
            >
              <img src={item.icon} alt={item.title} className="w-8 h-8 mb-4" />
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 mt-24">
          Benefits beyond learning
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {beyondLearning.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-2xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] p-6 w-full max-w-[300px] h-full"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 mb-4 mx-auto"
              />
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobBootcamp;
