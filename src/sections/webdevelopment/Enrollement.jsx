import React, { useEffect,useRef, useState } from "react";
import GroupIITM from "../trainingandinternship/img/GroupIITM.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import group from "../trainingandinternship/img/group.webp";
import alumni from "../trainingandinternship/img/alumni.webp";
import career from "../trainingandinternship/img/career.webp";
import fresher from "../trainingandinternship/img/fresher.png";
import newc from "../trainingandinternship/img/newc.svg";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const faqData = [
  {
    question: "Can I get a refund if I change my mind after enrolling?",
    answer:
      "Yes, refunds are available within 7 days of enrolment under specific terms and conditions.",
  },
  {
    question:
      "What are the benefits of joining Training and internship certification in Advanced DSA by IITM Pravartak?",
    answer:
      "You get real-time internship exposure, industry mentorship, and certification by IITM Pravartak.",
  },
  {
    question: "What is the eligibility criteria?",
    answer:
      "Any undergraduate or graduate student with basic programming knowledge can apply.",
  },
  {
    question: "What is the duration of the Program?",
    answer:
      "The program spans approximately 6 months with project work and assessments.",
  },
  {
    question: "What is the mode of learning?",
    answer:
      "It’s a blended model with online classes and optional campus immersion.",
  },
];

const Enrollement = () => {
    const faqRef = useRef(null);

  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(storedEmail || ""); // Fallback if null
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isStep1Valid = name.trim() !== "" && phone.trim().length === 10;
  return (
    <div className="w-full">
      <div className=" max-w-[1000px] mx-auto">
        <div className="sticky top-0 bg-white z-50 shadow-sm py-3 px-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={newc} alt="Coding Ninjas" className="h-6" />
            <span className="text-lg font-bold">×</span>
            <img src={GroupIITM} alt="IITM Pravartak" className="h-6" />
          </div>

          <div className="flex items-center gap-4">
            <button
             onClick={() => faqRef.current?.scrollIntoView({ behavior: "smooth" })}
             className="px-3 py-1 border border-black rounded-md font-medium text-sm hover:bg-gray-100">
              FAQ’s
            </button>
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${
                email || "U"
              }`}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="bg-white mt-6 rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6">
          {/* Left - Form */}
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-6">
              <img src={fresher} alt="Course Logo" className="h-10 w-10" />
              <div>
                <h2 className="text-base font-semibold text-gray-800">
                  Training and Internship Certification in Full Stack Development by IITM
                </h2>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  Blended learning
                  <span
                    className="text-gray-400 cursor-pointer"
                    title="Blended = online + campus"
                  >
                    ℹ️
                  </span>
                </p>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Enrolment milestones</h2>

            {/* Progress bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full ${
                    step >= 1 ? "bg-orange-500" : "bg-gray-300"
                  }`}
                ></div>
                <span
                  className={`text-sm ${
                    step >= 1 ? "text-black" : "text-gray-400"
                  }`}
                >
                  Application
                </span>
              </div>
              <div className="h-[2px] bg-gray-300 flex-1 mx-2"></div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full ${
                    step >= 2 ? "bg-orange-500" : "bg-gray-300"
                  }`}
                ></div>
                <span
                  className={`text-sm ${
                    step >= 2 ? "text-black" : "text-gray-400"
                  }`}
                >
                  T&C
                </span>
              </div>
              <div className="h-[2px] bg-gray-300 flex-1 mx-2"></div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <span className="text-sm text-gray-400">Enrol</span>
              </div>
            </div>

            {/* Form Step */}
            {step === 1 ? (
              <>
                <p className="text-gray-600 text-sm mb-2">
                  Enter your personal details
                </p>
                <p className="text-xs text-gray-500 mb-1">Step 1/2</p>

                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border rounded-md px-4 py-2 mb-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full border rounded-md px-4 py-2 mb-4 bg-gray-100 text-gray-700"
                />

                <label className="block mb-2 text-sm font-medium">
                  Phone Number
                </label>
                <div className="flex items-center border rounded-md px-3 py-2 mb-2">
                  <span className="mr-2 text-gray-500">🇮🇳 +91</span>
                  <input
                    type="tel"
                    className="w-full outline-none"
                    placeholder="Enter Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {phone.length !== 10 && (
                  <p className="text-red-500 text-xs mb-4">
                    Phone number is required
                  </p>
                )}

                <button
                  disabled={!isStep1Valid}
                  onClick={() => setStep(2)}
                  className={`w-full py-2 rounded-md font-semibold transition-colors ${
                    isStep1Valid
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </>
            ) : (
              <>
                <p className="text-gray-600 text-sm mb-2">
                  Enter your college details
                </p>
                <p className="text-xs text-gray-500 mb-1">Step 2/2</p>

                <label className="block mb-2 text-sm font-medium">
                  College Name
                </label>
                <input
                  type="text"
                  placeholder="Your college name"
                  className="w-full border rounded-md px-4 py-2 mb-4"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                />

                <label className="block mb-2 text-sm font-medium">Degree</label>
                <input
                  type="text"
                  placeholder="e.g., B.Tech, B.Sc"
                  className="w-full border rounded-md px-4 py-2 mb-4"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />

                <button
                  onClick={() => {
                    toast.success("Enrolled successfully!");
                    // optionally reset form fields here if needed
                  }}
                  className="w-full py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600"
                >
                  Submit Application
                </button>
              </>
            )}
          </div>

          {/* Right - Benefits Section */}
          <div className="bg-[#f7f7f7] p-6 rounded-xl text-sm w-full md:w-[280px]">
            <h3 className="font-semibold text-gray-800 mb-4">
              Become industry-ready
            </h3>
            <p className="text-blue-600 font-semibold mb-3">
              #CertifiedDSAExpert
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>
                <img src={alumni} className="h-6 w-6" /> Orientation &
                Graduation Ceremony on campus
              </li>
              <li>
                <img src={career} className="h-6 w-6" /> Exclusive access to 10X
                club activities
              </li>
              <li>
                <img src={group} className="h-6 w-6" /> 1:1 Industry expert
                sessions
              </li>
            </ul>
            <button
              onClick={() => toast.info("Request callback")}
              className="text-orange-600 font-semibold mt-4 hover:underline"
            >
              Talk to us today →
            </button>
          </div>
        </div>
        <div ref={faqRef} className="max-w-[700px] mx-auto mt-12 mb-10 px-4">
          <h2 className="text-center text-2xl font-bold mb-6">FAQ’s</h2>
          {faqData.map((item, index) => (
            <div key={index} className=" rounded-md mb-3 bg-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium text-gray-800"
              >
                {item.question}
                {openIndex === index ? (
                  <IoIosArrowDropup className="text-gray-500" />
                ) : (
                  <IoIosArrowDropdown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded flex"
            >
              Continue enrolment <MdOutlineKeyboardDoubleArrowUp/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollement;