import React, { useState } from "react";
import fir from "./images/fir.webp";
import future from "./images/future.svg";
import hand from "./images/hand.webp";
import stanford from "../../assets/stanford.png";
import one from "../../assets/one.png";
import placement from "../../assets/placement.png";

const Main = () => {
  const [experience, setExperience] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);

   const handleExperienceChange = (value) => {
     setExperience(value);
     
   };

  return (
    <section className="bg-gradient-to-br from-[#0e121d] via-[#111827] to-[#1e293b] text-white">
      <div className="max-w-[1000px] mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 mt-6 md:mt-12">
          <img
            src={fir}
            alt="For professionals badge"
            className="h-6 md:h-7 w-auto"
          />

          <h1 className="text-3xl md:text-3xl font-bold leading-tight">
            Full Stack Web Development <br /> Job Bootcamp with GenAI
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Choose MERN stack or Spring Boot and acquire expertise through
            practical application and real-world projects.
          </p>

          <div className="flex flex-wrap gap-3 text-xs font-medium">
            <span className="bg-[#1c1f2b] px-3 py-1 rounded-full flex items-center gap-1">
              <img src={one} className="h-6 w-6" /> Placement assistance
            </span>
            <span className="bg-[#1c1f2b] px-3 py-1 rounded-full flex items-center gap-1">
              <img src={future} className="h-6 w-6" /> AI-infused curriculum
            </span>
            <span className="bg-[#1c1f2b] px-3 py-1 rounded-full flex items-center gap-1">
              <img src={placement} className="h-6 w-6" /> 1:1 mentorship
            </span>
            <span className="bg-[#1c1f2b] px-3 py-1 rounded-full flex items-center gap-1">
              <img src={stanford} className="h-6 w-6" /> Faculty from MAANG
            </span>
          </div>

          <div className="bg-[#1f2937] text-center grid grid-cols-4 gap-4 text-sm text-white py-4 px-6 rounded-xl w-fit mt-4">
            <div>
              <p className="text-lg font-bold">95%</p>
              <p className="text-xs text-gray-400">placement rate</p>
            </div>
            <div>
              <p className="text-lg font-bold">1200+</p>
              <p className="text-xs text-gray-400">Companies Hiring</p>
            </div>
            <div>
              <p className="text-lg font-bold">128%</p>
              <p className="text-xs text-gray-400">Average hike</p>
            </div>
            <div>
              <p className="text-lg font-bold">1.5 L+</p>
              <p className="text-xs text-gray-400">Learners</p>
            </div>
          </div>

          <p className="text-sm mt-6 text-gray-300 flex items-center gap-2">
            Know in-depth details in our free webinar{" "}
            <img src={hand} className="h-10 w-10 " />
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white text-black rounded-2xl p-6 md:p-8 w-full md:w-[450px] shadow-xl">
          <h3 className="text-lg font-semibold mb-4">
            Book a <span className="text-pink-600 font-bold">Free 15 min</span>{" "}
            Webinar <span className="text-sm text-gray-500">to know more</span>
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault(); 
              if (experience === "tech") {
                setShowDrawer(true); 
              } else {
                alert("Webinar booked successfully!"); 
              }
            }}
            className="space-y-4 text-sm"
          >
            <div>
              <label>Name *</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label>Email *</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label>Phone Number *</label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mt-1">
                <span className="px-3 text-sm">🇮🇳</span>
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
            </div>

            <div>
              <label>Experience *</label>
              <div className="space-y-2 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="experience"
                    value="tech"
                    className="accent-black"
                    checked={experience === "tech"}
                    onChange={(e) => handleExperienceChange(e.target.value)}
                  />
                  Working professional - Technical roles
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="experience"
                    value="non-tech"
                    className="accent-black"
                    checked={experience === "non-tech"}
                    onChange={(e) => handleExperienceChange(e.target.value)}
                  />
                  Working professional - Non technical
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="experience"
                    value="final-year"
                    className="accent-black"
                    checked={experience === "final-year"}
                    onChange={(e) => handleExperienceChange(e.target.value)}
                  />
                  College student - Final year
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="experience"
                    value="pre-final"
                    className="accent-black"
                    checked={experience === "pre-final"}
                    onChange={(e) => handleExperienceChange(e.target.value)}
                  />
                  College student - 1st to pre-final year
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="experience"
                    value="others"
                    className="accent-black"
                    checked={experience === "others"}
                    onChange={(e) => handleExperienceChange(e.target.value)}
                  />
                  Others
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold mt-4"
            >
              Continue booking webinar →
            </button>

            <p className="text-xs text-gray-500 mt-2 leading-snug">
              I authorise Coding Ninjas to contact me with course updates &
              offers via Email/SMS/Whatsapp/Call. I have read and agree to
              <a href="#" className="underline ml-1">
                Privacy Policy
              </a>{" "}
              &
              <a href="#" className="underline ml-1">
                Terms of use
              </a>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Slide-In Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[420px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          showDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0 z-50">
          <h2 className="text-xl font-semibold text-black">
            Book a free live webinar
          </h2>
          <button
            onClick={() => setShowDrawer(false)}
            className="text-4xl text-black"
          >
            &times;
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-64px)] text-black text-sm">
          <div>
            <p className="font-semibold text-lg mb-2">
              Select a time slot <span className="text-red-500">*</span>
            </p>

            <p className="text-sm mb-2 mt-4 text-gray-500">Friday, 11 Jul 2025</p>
            <div className="flex gap-3 flex-wrap mb-4">
              <button className=" font-semibold mt-4 px-4 py-2 rounded-md">08:00 PM</button>
            </div>

            <p className="text-sm mb-2 text-gray-500">Saturday, 12 Jul 2025</p>
            <div className="flex gap-3 flex-wrap">
              <button className=" font-semibold mt-4 px-4 py-2 rounded-md">03:00 PM</button>
              <button className=" font-semibold mt-4 px-4 py-2 rounded-md">06:00 PM</button>
              <button className=" font-semibold mt-4 px-4 py-2 rounded-md">08:00 PM</button>
            </div>
          </div>

          {/* Graduation Year Dropdown */}
          <div className="pt-6">
            <label className="block font-semibold mb-2 text-lg">Graduation Year</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
              <option>Select Graduation Year</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
             

            </select>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold">
            Book webinar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
