import React, { useEffect, useRef, useState } from "react";
import comma from "../../assets/comma.svg";
import { MdArrowOutward } from "react-icons/md";
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
import frame1 from "../../assets/frame1.svg";

import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import googleIcon from "../../assets/googleIcon.svg";
import c from "../../assets/c.svg";

const SuccessStories = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Non tech to tech");

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (sectionTop >= window.innerHeight - 100) {
        setScrollHeight(0);
      } else if (sectionTop + sectionHeight <= 0) {
        setScrollHeight(100);
      } else {
        const progress = Math.min(
          100,
          Math.max(
            0,
            ((window.innerHeight - sectionTop - 100) / sectionHeight) * 100
          )
        );
        setScrollHeight(progress);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "Non tech to tech",
    "Service to product",
    "Tier 2/3 colleges",
    "Job Bootcamp",
    "Upskilling Courses",
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

    "Tier 2/3 colleges": [
      {
        name: "Naman",
        title: "Software Engineer",
        photo: man2, // Replace with local image if needed
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
    "Job Bootcamp": [
      {
        name: "Supratik. De",
        title: "Senior Software Engineer",
        photo: entre1,
        content:
          "Coding Ninjas brought two pivotal changes to my career: I transitioned to a Product-based company as a Senior Software Engineer, and my confidence in DSA skills soared.",
        logo: adobe,
      },
      {
        name: "Maanas Agrawal",
        title: "SDE-2",
        photo: entre2,
        content:
          "Ankush Singla and Manisha Khattar's lectures made tough problems easy to grasp. They are not just teachers, but mentors. TAs were always available. I wholeheartedly recommend Coding Ninjas for anyone prepping for placements.",
        logo: app,
      },
      {
        name: "Vartika Shakya",
        title: "Associate Technical Consultant",
        photo: entre3,
        content:
          "Coding Ninjas holds a special place in my heart. I convinced my friends to join because it's been a driving force in my journey, and I'm grateful for who I am today.",
        logo: appmyntra,
      },
    ],

    "Upskilling Courses": [
      {
        name: "Rahul Maurya",
        title: "Senior Software Engineer",
        photo: entre1, // Replace with local image if needed
        content:
          "II had basic coding skills, especially in Android programming. A friend suggested Coding Ninjas, and their course was a turning point. The video lessons were invaluable, and I credit them for my interview success. Their structured teaching made complex topics clear.",
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
  };

  return (
    <div
      ref={sectionRef}
      className="relative flex justify-center bg-black py-20 min-h-[1000px] "
    >
      {/* Vertical Line */}
      <div className="absolute top-0 left-1/2 -translate-x-[500px] h-full z-10 ">
        <div className="relative h-full w-[2px]">
          {/* Dotted White Line (behind) */}
          <div className="absolute top-0 left-0 h-full w-[2px] border-l-2 border-dotted border-white z-0" />

          {/* Animated Orange Line (on top) */}
          <div
            className="absolute top-0 left-0 w-[2px] bg-orange-400 z-10 transition-all duration-500 ease-in-out"
            style={{ height: `${scrollHeight}%` }}
          />

          {/* Image half on the left of line */}
          <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-14 h-14 z-50 border-2 ">
            <img
              src={comma}
              alt="Floating Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content Area (1100px) */}
      <div className="relative max-w-[1100px] w-full px-4 z-20">
        {/* Your content here */}
        <div className="flex items-center justify-between mb-10 px-4 md:ml-[calc(50%-500px+36px)] mt-12">
          <h2 className="text-white text-xl md:text-xl font-semibold ml-1">
            Stories from people like you
          </h2>
          <a
            href="#"
            className="text-orange-400 text-lg font-semibold underline hover:text-orange-300 flex items-center gap-1"
          >
            Read all success stories <MdArrowOutward className="text-lg" />
          </a>
        </div>

        {/*  Category Buttons */}
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

        {/*  Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-[calc(50%-470px)] mt-16 ">
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
              <p className="text-sm text-gray-300">{story.content}</p>

              {/* Company Logo */}
              <div className="mt-6 flex justify-end">
                <img src={story.logo} alt="Company" className="w-10 h-10" />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            const el = document.getElementById("offerings");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-10  mb-20 mx-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-sm flex items-center gap-2"
        >
          Explore Offerings
          <MdKeyboardDoubleArrowUp className="text-white text-lg" />
        </button>
        <div className="relative mt-10 mb-20 px-4 ">
          {/* Background frame image */}
          <img
            src={frame1}
            alt="frame background"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none "
          />

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto py-10">
            <h2 className="text-white text-xl font-semibold mb-2">
              Trusted by learners
            </h2>
            <p className="text-gray-300 mb-8 text-sm sm:text-base">
              1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+
              colleges working in top product companies
            </p>

            <div className="flex flex-wrap justify-center gap-10 text-white">
              {/* Facebook */}
              <div className="flex flex-col items-center">
                <FaFacebookSquare className="w-10 h-10 mb-2" />
                <p className="text-lg font-semibold">4.9 ⭐</p>
                <p className="text-sm text-gray-400">700+ reviews</p>
              </div>

              {/* Google */}
              <div className="flex flex-col items-center">
                <img src={googleIcon} alt="google" className="w-10 h-10 mb-2" />
                <p className="text-lg font-semibold">4.7 ⭐</p>
                <p className="text-sm text-gray-400">2300+ reviews</p>
              </div>

              {/* Coding Ninjas */}
              <div className="flex flex-col items-center">
                <img src={c} alt="coding ninjas" className="w-10 h-10 mb-2" />
                <p className="text-lg font-semibold">4.8 ⭐</p>
                <p className="text-sm text-gray-400">Course rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
