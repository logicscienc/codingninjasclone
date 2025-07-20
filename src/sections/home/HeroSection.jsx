import React, { useState } from "react";
import check from "../../assets/check.svg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import space from "./img/space.webp";
import circle from "./img/circle.svg";
import layer from "./img/layer.svg";
import laptop from "./img/laptop.webp";
import search from "./img/search.gif";
import iitm from "./img/iitm.webp";
import iit from "./img/iit.webp";

const HeroSection = () => {
  const [experience, setExperience] = useState("");
  const [interest, setInterest] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [formStage, setFormStage] = useState("form");
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!experience) newErrors.experience = "Please select your experience.";
    if (!interest || interest === "Select your options/choices")
      newErrors.interest = "Please select your interest.";
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!/^[6-9]\d{9}$/.test(phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim()))
      newErrors.email = "Enter a valid email address.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormStage("loading");

      setTimeout(() => {
        if (
          (experience === "Working Professional - Technical Roles" ||
            experience === "Working Professional - Non Technical" ||
            experience === "Others") &&
          (interest === "Full Stack Developer" || interest === "Data Analytics")
        ) {
          setFormStage("result");
        } else if (
          (experience === "College Student - Final Year" ||  experience === "College Student - 1st to Pre-final Year") &&
          (interest === "Full Stack Developer" || interest === "Data Analytics" || interest === "Data Structures and Algorithms")
        ) {
          setFormStage("result");
        } else {
          alert("Form submitted for other user flow!");
          setFormStage("form");
        }
      }, 2000);
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
            {/* Form stage */}
            {formStage === "form" && (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  Let's find the right course for you
                </h2>
                <form onSubmit={handleSubmit}>
                  {/* Experience */}
                  <div className="mb-5">
                    <label className="text-[12px] font-medium mb-2 block">
                      Experience
                    </label>
                    <div className="space-y-2 text-sm">
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
                            checked={experience === label}
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                    {errors.experience && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.experience}
                      </p>
                    )}
                  </div>

                  {/* Interest */}
                  <div className="mb-5">
                    <label className="text-[12px] font-medium mb-1 block">
                      Select topic of interest
                    </label>
                    <select
                      className="w-full border border-gray-400 p-2 rounded-md text-sm"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                    >
                      <option>Select your options/choices</option>
                      {getInterestOptions().map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  {/* Name */}
                  <div className="mb-5">
                    <label className="text-[12px] font-medium block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-full border border-gray-400 p-2 rounded-md text-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-5">
                    <label className="text-[12px] font-medium block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full border border-gray-400 p-2 rounded-md text-sm"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label className="text-[12px] font-medium block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full border border-gray-400 p-2 rounded-md text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-orange-500 text-white w-full py-2 rounded-md font-semibold hover:bg-orange-600 text-sm mt-4"
                  >
                    Find your course
                  </button>
                  <p className="text-[10px] text-gray-500 mt-4">
                    I authorise Coding Ninjas to contact me with course updates
                    & offers via Email/SMS/Whatsapp/Call. I have read and agree
                    to <span className="underline">Privacy Policy</span> &{" "}
                    <span className="underline">Terms of use</span>
                  </p>
                </form>
              </>
            )}

            {formStage === "loading" && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <img src={search} alt="Loading" className="w-24 h-24 mb-4" />
                <p className="text-lg font-medium">Just a moment...</p>
                <p className="text-sm text-gray-600">
                  We’re finding the right course for you.
                </p>
              </div>
            )}

            {formStage === "result" &&
              (experience === "Working Professional - Technical Roles" ||
                experience === "Working Professional - Non Technical" ||
                experience === "Others") &&
              interest === "Full Stack Developer" && (
                <div className="text-center  relative px-4 py-2">
                  <button
                    onClick={() => setFormStage("form")}
                    className="absolute top-2 left-2 text-gray-600 hover:text-black text-2xl cursor-pointer"
                    aria-label="Go back"
                  >
                    <MdKeyboardArrowLeft />
                  </button>
                  <h2 className="text-xl font-bold mb-1">Hey Coder,</h2>
                  <p className="text-gray-600 mb-4">
                    We’ve found just the course for you!
                  </p>

                  {/* Image block with absolute badge */}
                  <div className="relative px-2 pt-2 mb-4">
                    <img
                      src={laptop}
                      alt="Laptop"
                      className="w-full h-40 object-cover opacity-90 rounded-xl"
                    />
                    <div className="absolute -bottom-4 left-4 bg-white p-1 rounded-md shadow-md">
                      <img src={layer} alt="Logo" className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Badge and course title */}
                  <span className="inline-block bg-green-50 text-green-600 px-3 py-1 text-xs rounded-full mb-2">
                    Recommended
                  </span>
                  <h3 className="text-base font-semibold leading-snug mb-4">
                    Full Stack Web Development Job Bootcamp with GenAI
                  </h3>

                  {/* Bullet points */}
                  <ul className="text-sm text-left space-y-2 px-6 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        <img src={check} />
                      </span>{" "}
                      Job ready AI-infused curriculum
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        <img src={check} />
                      </span>{" "}
                      15+ industry ready projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        <img src={check} />
                      </span>{" "}
                      95% placement rate
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate("/fullstack")}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-4/5 py-2 rounded-md"
                  >
                    Visit course page
                  </button>

                  {/* Webinar Link */}
                  <p className="text-xs text-orange-600 mt-4 underline">
                    Book a free webinar{" "}
                    <span className="text-gray-600 font-normal">
                      to learn more
                    </span>
                  </p>
                </div>
              )}
            {formStage === "result" &&
              (experience === "Working Professional - Technical Roles" ||
                experience === "Working Professional - Non Technical" ||
                experience === "Others") &&
              interest === "Data Analytics" && (
                <div className="text-center relative px-4 py-2">
                  {/* Top Back Icon */}
                  <div
                    className="absolute top-2 left-2 text-gray-600 hover:text-black text-2xl cursor-pointer"
                    onClick={() => setFormStage("form")}
                  >
                    <MdKeyboardArrowLeft size={24} />
                  </div>

                  {/* Heading */}
                  <h2 className="text-xl font-bold mb-1">Hey Coder,</h2>
                  <p className="text-gray-600 mb-4">
                    We’ve found just the course for you!
                  </p>

                  {/* Image block with icon badge */}
                  <div className="relative px-2 pt-2 mb-4">
                    <img
                      src={space}
                      alt="Campus"
                      className="w-full h-40 object-cover opacity-90 rounded-xl"
                    />
                    <div className="absolute -bottom-4 left-4 bg-white p-1 rounded-md shadow-md">
                      <img src={circle} alt="Logo" className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Badge & Course Title */}
                  <span className="inline-block bg-green-50 text-green-600 px-3 py-1 text-xs rounded-full mb-2">
                    Recommended
                  </span>
                  <h3 className="text-base font-semibold leading-snug mb-4">
                    PG Certification in Data Analytics with GenAI by E&ICT IIT
                    Guwahati
                  </h3>

                  {/* Bullet Points */}
                  <ul className="text-sm text-left space-y-2 px-6 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>{" "}
                      E&ICT IIT Guwahati Alumni Status
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>{" "}
                      Prestigious PG Certification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>{" "}
                      Curriculum co-designed with IIT faculty
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate("/ontheline")}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-4/5 py-2 rounded-md cursor-pointer"
                  >
                    Visit course page
                  </button>

                  {/* Webinar Link */}
                  <p className="text-xs text-orange-600 mt-4 underline">
                    Book a free webinar{" "}
                    <span className="text-gray-600 font-normal">
                      to learn more
                    </span>
                  </p>
                </div>
              )}
            {formStage === "result" &&
              (experience === "College Student - Final Year" ||  experience === "College Student - 1st to Pre-final Year") &&
              interest === "Full Stack Developer" && (
                <div className="text-center relative px-4 py-2">
                  {/* Back Arrow */}
                  <div
                    className="absolute top-2 left-2 text-gray-600 hover:text-black text-2xl cursor-pointer"
                    onClick={() => setFormStage("form")}
                  >
                    <MdKeyboardArrowLeft />
                  </div>

                  <h2 className="text-xl font-bold mb-1">Hey Anju,</h2>
                  <p className="text-gray-600 mb-4">
                    We’ve found just the course for you!
                  </p>

                  {/* Image with badge */}
                  <div className="relative px-2 pt-2 mb-4">
                    <img
                      src={iit}
                      alt="Campus"
                      className="w-full h-40 object-cover rounded-xl"
                    />
                    <div className="absolute -bottom-4 left-4 bg-white p-1 rounded-md shadow-md">
                      <img src={iitm} alt="Logo" className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Tag and Heading */}
                  <span className="inline-block bg-green-50 text-green-600 px-3 py-1 text-xs rounded-full mb-2">
                    Recommended
                  </span>
                  <h3 className="text-base font-semibold leading-snug mb-4">
                    Training and Internship Certification in Full Stack Web
                    Development with Generative AI
                  </h3>

                  {/* Bullet Points */}
                  <ul className="text-sm text-left space-y-2 px-6 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      IIT faculty Guest Lectures & campus immersion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      Prestigious Training & Internship Certification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      Curriculum co-designed with IIT faculty
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-4/5 py-2 rounded-md"
                    onClick={() => navigate("/webdevelopment")}
                  >
                    Visit course page
                  </button>

                  {/* Webinar Link */}
                  <p className="text-xs text-orange-600 mt-4 underline">
                    Book a free webinar{" "}
                    <span className="text-gray-600 font-normal">
                      to learn more
                    </span>
                  </p>
                </div>
              )}
            {formStage === "result" &&
              (experience === "College Student - Final Year" ||  experience === "College Student - 1st to Pre-final Year") &&
              interest === "Data Analytics" && (
                <div className="text-center relative px-4 py-2">
                  {/* Back Arrow */}
                  <div
                    className="absolute top-2 left-2 text-gray-600 hover:text-black text-2xl cursor-pointer"
                    onClick={() => setFormStage("form")}
                  >
                    <MdKeyboardArrowLeft />
                  </div>

                  <h2 className="text-xl font-bold mb-1">Hey Anju,</h2>
                  <p className="text-gray-600 mb-4">
                    We’ve found just the course for you!
                  </p>

                  {/* Image with badge */}
                  <div className="relative px-2 pt-2 mb-4">
                    <img
                      src={space}
                      alt="Campus"
                      className="w-full h-40 object-cover rounded-xl"
                    />
                    <div className="absolute -bottom-4 left-4 bg-white p-1 rounded-md shadow-md">
                      <img src={circle} alt="Logo" className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Tag and Heading */}
                  <span className="inline-block bg-green-50 text-green-600 px-3 py-1 text-xs rounded-full mb-2">
                    Recommended
                  </span>
                  <h3 className="text-base font-semibold leading-snug mb-4">
                    Student Training cum Internship Program in Data Analytics with Gen AI
                  </h3>

                  {/* Bullet Points */}
                  <ul className="text-sm text-left space-y-2 px-6 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      E&ICT IIT Guwahati Alumni Status
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      Prestigious Training & Internship Certification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      Curriculum co-designed with IIT faculty
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-4/5 py-2 rounded-md"
                    onClick={() => navigate("/academy")}
                  >
                    Visit course page
                  </button>

                  {/* Webinar Link */}
                  <p className="text-xs text-orange-600 mt-4 underline">
                    Book a free webinar{" "}
                    <span className="text-gray-600 font-normal">
                      to learn more
                    </span>
                  </p>
                </div>
              )}
               {formStage === "result" &&
              (experience === "College Student - Final Year" ||  experience === "College Student - 1st to Pre-final Year") &&
              interest === "Data Structures and Algorithms" && (
                <div className="text-center relative px-4 py-2">
                  {/* Back Arrow */}
                  <div
                    className="absolute top-2 left-2 text-gray-600 hover:text-black text-2xl cursor-pointer"
                    onClick={() => setFormStage("form")}
                  >
                    <MdKeyboardArrowLeft />
                  </div>

                  <h2 className="text-xl font-bold mb-1">Hey Anju,</h2>
                  <p className="text-gray-600 mb-4">
                    We’ve found just the course for you!
                  </p>

                  {/* Image with badge */}
                  <div className="relative px-2 pt-2 mb-4">
                    <img
                      src={iit}
                      alt="Campus"
                      className="w-full h-40 object-cover rounded-xl"
                    />
                    <div className="absolute -bottom-4 left-4 bg-white p-1 rounded-md shadow-md">
                      <img src={iitm} alt="Logo" className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Tag and Heading */}
                  <span className="inline-block bg-green-50 text-green-600 px-3 py-1 text-xs rounded-full mb-2">
                    Recommended
                  </span>
                  <h3 className="text-base font-semibold leading-snug mb-4">
                    Training and Internship Certification in Advanced Data Structures and Algorithms
                  </h3>

                  {/* Bullet Points */}
                  <ul className="text-sm text-left space-y-2 px-6 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      IIT faculty Guest Lectures & campus immersion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      Prestigious Training & Internship Certification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">
                        {" "}
                        <img src={check} />
                      </span>
                      Curriculum co-designed with IIT faculty
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-4/5 py-2 rounded-md"
                    onClick={() => navigate("/trainingandplacement")}
                  >
                    Visit course page
                  </button>

                  {/* Webinar Link */}
                  <p className="text-xs text-orange-600 mt-4 underline">
                    Book a free webinar{" "}
                    <span className="text-gray-600 font-normal">
                      to learn more
                    </span>
                  </p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
