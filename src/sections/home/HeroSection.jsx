import React, { useState } from "react";
import check from "../../assets/check.svg";

const HeroSection = () => {
  const [experience, setExperience] = useState("");

  // Define interest options based on experience
  const getInterestOptions = () => {
    if (
      experience === "College Student - Final Year" ||
      experience === "College Student - 1st to Pre-final Year"
    ) {
      return [
        "Full Stack Developer",
        "Data Analytics",
        "Data Structures and Algorithms",
      ];
    } else if (
      experience === "Working Professional - Technical Roles" ||
      experience === "Working Professional - Non Technical" ||
      experience === "Others"
    ) {
      return ["Full Stack Developer", "Data Analytics"];
    } else {
      return [];
    }
  };
  return (
    <div className="bg-black text-white min-h-screen px-4 relative overflow-hidden pt-10">
      {/* Polka Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:20px_20px] mask-fade-out z-0"></div>

      <div className=" max-w-[1000px] container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 relative z-10 ">
        {/* Left Section */}
        <div className="text-left max-w-lg space-y-6 pt-6">
          <p className="text-md md-text-base font-semibold bg-gradient-to-r from-green-300 to-yellow-200 text-transparent bg-clip-text ">
            Restricted by opportunities?
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get the tech career <br /> you deserve.{" "}
            <span className="text-white">Faster.</span>
          </h1>

          <ul className="space-y-12 mt-20">
            {[
              {
                title: "128% average hike",
                desc: "via our placement cell",
              },
              {
                title: "1.5 Lac+ learners",
                desc: "cracked top tech companies",
              },
              {
                title: "1,400+ alumni in MAANG",
                desc: "& 103 unicorn startups",
              },
            ].map((item, index) => (
              <li
                key={index}
                className={`relative flex items-center bg-[#0f0f0f]/70 backdrop-blur-md border border-[#2a2a2a] rounded-md shadow-[0_0_20px_rgba(255,255,255,0.08)] overflow-hidden min-h-[68px] ${
                  index === 0
                    ? "before:content-[''] before:absolute before:top-0 before:left-0 before:w-[16px] before:h-[16px] before:border-t before:border-l before:border-white/20"
                    : ""
                } ${
                  index === 1
                    ? "before:content-[''] before:absolute before:top-0 before:right-0 before:w-[16px] before:h-[16px] before:border-t before:border-r before:border-white/15"
                    : ""
                } ${
                  index === 2
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[14px] after:h-[14px] after:border-b after:border-l after:border-white/15"
                    : ""
                } `}
              >
                {/* Left icon section */}
                <div
                  className={`flex items-center justify-center ${
                    index === 0 ? "border-l-0" : "border-l"
                  } w-[56px] h-full border-r border-white/15 bg-black/30 p-3`}
                >
                  <img src={check} alt="check" className="w-5 h-5" />
                </div>

                {/* Text content */}
                <div className="px-4 py-3 text-white leading-relaxed">
                  <strong className="text-white">{item.title}</strong>{" "}
                  <span className="text-gray-400">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="w-full max-w-md p-[6px] rounded-[24px] border-[2px] border-black shadow-[0_0_40px_rgba(255,255,255,0.4)] bg-gradient-to-b from-[#1a1a1a] to-black">
          <div className="bg-white text-black rounded-[20px] p-6 w-full min-h-[80vh] border border-black">
            <h2 className="text-lg font-semibold mb-4">
              Let's find the right course for you
            </h2>

            <form>
              <div className="mb-5">
                <label className="text-[12px] text-gray-700 font-medium block mb-2">
                  Experience
                </label>
                <div className="space-y-2 text-sm text-black">
                  {[
                    "Working Professional - Technical Roles",
                    "Working Professional - Non Technical",
                    "College Student - Final Year",
                    "College Student - 1st to Pre-final Year",
                    "Others",
                  ].map((label, idx) => (
                    <label key={idx} className="block">
                      <input
                        type="radio"
                        name="experience"
                        value={label}
                        onChange={(e) => setExperience(e.target.value)}
                        className="mr-2 accent-black"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-5">
                <label className="text-[12px] text-gray-700 font-medium block mb-1">
                  Select topic of intrest
                </label>
                <select className="w-full border border-gray-400 p-2 rounded-md text-sm">
                  <option>Select your options/choices</option>
                   {getInterestOptions().map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label className="text-[12px] text-gray-700 font-medium block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full border border-gray-400 p-2 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="text-[12px] text-gray-700 font-medium block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-400 p-2 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="text-[12px] text-gray-700 font-medium block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border border-gray-400 p-2 rounded-md text-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white w-full py-2 rounded-md font-semibold hover:bg-orange-600 text-sm mt-4"
              >
                Find your course
              </button>
              <p className="text-[10px] text-gray-500 mt-4">
                I authorise Coding Ninjas to contact me with course updates &
                offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
                <span className="underline">Privacy Policy</span> &{" "}
                <span className="underline">Terms of use</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
