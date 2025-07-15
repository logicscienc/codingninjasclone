import React, { useEffect, useRef, useState } from "react";
import entre1 from "../../assets/entre1.jpg";
import entre2 from "../../assets/entre2.jpg";
import entre3 from "../../assets/entre3.jpg";
import morning from "../../assets/morning.jpg";
import woman from "../../assets/woman.jpg";
import man1 from "../../assets/man1.jpg";
import man2 from "../../assets/man2.jpg";
import smile from "../../assets/smile.jpg";
import adobe from "../../assets/adobe.webp";
import app from "../../assets/app.webp";
import appmyntra from "../../assets/appmyntra.webp";
import apple from "../../assets/apple.webp";
import asset from "../../assets/asset.png";
import bombay from "../../assets/bombay.jpg";
import bubbles from "../../assets/bubbles.webp";
import expsdia from "../../assets/expedia.webp";

const TrustAndLove = ({ setShowForm }) => {
  const [selectedCategory, setSelectedCategory] = useState("Non tech to tech");

  const categories = [
    "Non tech to tech",
    "Service to product",
    "Landed the first Job",
  ];

  const stories = {
    "Non tech to tech": [
      {
        name: "Naman",
        title: "Software Engineer",
        photo: entre1,
        content:
          "In 2019, seniors suggested Coding Ninjas. I received a scholarship, attended classes, and studied C++ and DSA.",
        logo: adobe,
      },
      {
        name: "Gautam Zindal",
        title: "Data Analyst",
        photo: entre2,
        content:
          "Coding Ninjas' Hinglish course option bridged the language gap. From Intro to C++ to Data Structures...",
        logo: app,
      },
      {
        name: "Shivansh Jaitly",
        title: "Advanced Engineering Analyst",
        photo: entre3,
        content:
          "As a college freshman, I was clueless about the significance of Data Structures. Thanks to Coding Ninjas...",
        logo: appmyntra,
      },
    ],

    "Service to product": [
      {
        name: "Twisam",
        title: "Full Stack Developer",
        photo: morning,
        content:
          "From optometrist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills!",
        logo: apple,
      },
      {
        name: "Onkar Lapate",
        title: "SDE-1",
        photo: woman,
        content:
          "Chose Coding Ninjas for structured, high-quality learning due to lack of support & structure. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.",
        logo: asset,
      },
      {
        name: "Durgesh Chaubey",
        title: "SDE - 1",
        photo: man1,
        content:
          "Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.",
        logo: bombay,
      },
    ],

    "Landed the first Job": [
      {
        name: "Naman",
        title: "Software Engineer",
        photo: man2,
        content:
          "In 2019, seniors suggested Coding Ninjas. I received a scholarship, attended classes, and studied C++ and DSA.",
        logo: bubbles,
      },
      {
        name: "Annu",
        title: "SDE - 1",
        photo: smile,
        content:
          "A friend recommended Coding Ninjas' JAVA course in my first year. It was amazing. The basics I learned still benefit me. The faculty brilliantly simplified complex concepts.",
        logo: expsdia,
      },
      {
        name: "Ayush Jaiswal",
        title: "Software Engineer",
        photo: entre3,
        content:
          "My journey with Coding Ninjas has been long and rewarding. In college, their expert guidance helped me build a strong foundation and prepare for placements.",
        logo: appmyntra,
      },
    ],
  };
  return (
    <div className="bg-black  pt-4 pb-16 w-full">
      <div className="max-w-[1000px] w-full px-4 mx-auto z-20">
        <h1 className="text-white text-2xl md:text-3xl font-semibold mt-1 mb-10 text-center">
          Voices of trust & love
        </h1>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full border transition-all ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-800 text-white"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ">
          {stories[selectedCategory]?.map((story, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] text-white rounded-xl relative p-6 shadow-md"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-12 h-12 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M0,0 L100,0 L0,100 Z" />
                </svg>
              </div>

              {/* User Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-white -mt-10 mb-4">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + Title */}
              <h4 className="text-lg font-bold text-center">{story.name}</h4>
              <p className="text-sm text-gray-400 text-center mb-4">
                {story.title}
              </p>

              {/* Content */}
              <p className="text-base text-gray-300">{story.content}</p>

              {/* Company Logo */}
              <div className="mt-6 flex justify-end">
                <img src={story.logo} alt="Company" className="w-10 h-10" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-20 mb-20">
          <a
            href="https://www.codingninjas.com/review?course_slug=job-bootcamp-web-development"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-sm flex items-center gap-2"
          >
            Read all success stories
            <span className="text-lg">↗</span>
          </a>
          <button
            onClick={() => setShowForm(true)}
            className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-sm flex items-center gap-2 text-sm"
          >
            Book a Free webinar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustAndLove;
