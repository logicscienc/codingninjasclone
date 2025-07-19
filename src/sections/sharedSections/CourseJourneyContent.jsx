import React, { useEffect, useRef, useState } from "react";
import rocket from "./images/rocket.webp";
import cool from "./images/cool.webp";
import angel from "./images/angel.webp";
import worry from "./images/worry.webp";
import star from "./images/star.webp";
import { motion } from "framer-motion";
import { toast } from "react-toastify";


const journeySteps = [
  {
    emoji: rocket,
    tag: "Excited!",
    title: "Kickstart your journey",
    points: [
      "Orientation by Ankush Singla",
      "Meet your program instructors",
      "Meet your peers",
    ],
  },
  {
    emoji: cool,
    tag: "Confident",
    title: "Master full stack by solving real problems",
    points: [
      "Build real-world projects",
      "Get doubts resolved via 1:1 sessions",
      "Meet industry experts",
    ],
  },
  {
    emoji: angel,
    tag: "Supported",
    title: "Experts to help you prepare for interviews",
    points: [
      "Resume and profile creation",
      "Mock interviews",
      "Soft-skill training",
    ],
  },
  {
    emoji: worry,
    tag: "Resilient",
    title: "Catch the eye of your dream companies",
    points: ["Daily jobs shared", "hirist.com highlights", "Alumni referrals"],
  },
  {
    emoji: star,
    tag: "Over the moon",
    title: "Nail the interview for your dream job",
    points: ["Gain company insights", "Apply for higher offers"],
  },
];

const CourseJourneyContent = ({
  showForm,
  setShowForm,
  courseName = "Web Development",
  buttonLabel = "View Curriculam",
  onButtonClick,
}) => {
  const containerRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState(
    Array(journeySteps.length).fill(false)
  );
  const stepRefs = useRef([]);

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, journeySteps.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = stepRefs.current.indexOf(entry.target);
          if (idx !== -1) {
            setVisibleSteps((prev) => {
              const updated = [...prev];
              updated[idx] = entry.isIntersecting;
              return updated;
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const [selectedCourse, setSelectedCourse] = useState(courseName);
  useEffect(() => {
    setSelectedCourse(courseName);
  }, [courseName]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // const link = document.createElement("a");
      // link.href = "/webinar-brochure.pdf";
      // link.download = "Webinar_Info.pdf";
      // link.click();
      const isValid = validateForm()
       if (isValid) {
    toast.success(" Webinar booked successfully!", {
       autoClose: 3000,
    });
    setShowForm(false);
  }
    }
  };

  const handleCourseClick = (value) => {
    if (selectedCourse === value) {
      setSelectedCourse("");
    } else {
      setSelectedCourse(value);
    }
  };

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showForm]);

  const getTagColor = (tag) => {
    switch (tag) {
      case "Excited!":
        return "bg-yellow-200 text-black";
      case "Confident":
        return "bg-pink-200 text-black";
      case "Supported":
        return "bg-green-200 text-black";
      case "Resilient":
        return "bg-white text-black border border-gray-300";
      case "Over the moon":
        return "bg-blue-200 text-black";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`relative bg-[#f6f4fb] py-20 overflow-hidden transition-all duration-300 ${
          showForm ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <div className="max-w-[1000px] mx-auto px-4 flex">
          <div className="w-1/3 pr-4">
            <h3 className="text-sm text-violet-600 font-semibold">
              Bootcamp Journey
            </h3>
            <h1 className="text-4xl font-bold leading-tight mt-2">
              Future-proof your career <br />
              <span className="text-blue-600">with GenAI skills</span>
            </h1>
            <button
              className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md text-sm"
              onClick={onButtonClick || (() => setShowForm(true))}
            >
              {buttonLabel}
            </button>
          </div>

          <div className="w-2/3 relative">
            <div className="space-y-12 ml-12 relative z-20">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="flex items-start space-x-6 relative"
                >
                  <div className="flex flex-col items-center w-20 shrink-0 mt-6 relative">
                    <img
                      src={step.emoji}
                      alt={step.tag}
                      className="h-10 w-10"
                    />
                    <span
                      className={`text-xs mt-1 px-2 py-0.5 rounded-full whitespace-nowrap ${getTagColor(
                        step.tag
                      )}`}
                    >
                      {step.tag}
                    </span>
                  </div>

                  <div className="relative w-full flex flex-col items-start">
                    {/* Horizontal Line Between Emoji and Text */}
                    <motion.div
                      className="absolute left-[-2.5rem] top-5 h-px bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: visibleSteps[index] ? "32px" : 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="bg-white rounded-lg shadow-md p-4 w-full">
                      <div className="flex flex-row flex-wrap gap-x-8 items-start justify-between text-sm">
                        <h3 className="font-semibold text-gray-800 min-w-[150px] break-words">
                          {step.title}
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs flex-1">
                          {step.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <motion.div
                        className="ml-[1.25rem] mt-2 w-px bg-black"
                        initial={{ height: 0 }}
                        animate={{ height: visibleSteps[index] ? "64px" : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-[520px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          showForm ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-grow overflow-y-auto p-6">
          <h2 className="text-lg font-bold mb-4">Book a free live webinar</h2>

          <label className="flex items-center mb-4 cursor-pointer">
            <input
              type="radio"
              name="course"
              value={courseName}
              checked={selectedCourse === courseName}
              onChange={() => handleCourseClick(courseName)}
              className="appearance-none w-4 h-4 border-2 rounded-full checked:bg-black checked:border-black mr-3"
            />
            {courseName}
          </label>

          <label className="block mb-1 text-sm">Name *</label>
          <input
            type="text"
            className="border w-full px-3 py-2 mb-2 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mb-2">{errors.name}</p>
          )}

          <label className="block mb-1 text-sm">Email *</label>
          <input
            type="email"
            className="border w-full px-3 py-2 mb-2 rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-xs mb-2">{errors.email}</p>
          )}

          <label className="block mb-1 text-sm">Phone Number *</label>
          <input
            type="tel"
            className="border w-full px-3 py-2 mb-2 rounded"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-black text-xs mb-2">{errors.phone}</p>
          )}

          <label className="block mb-1 text-sm font-medium">Experience *</label>
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {[
              "Working professional - Technical roles",
              "Working professional - Non technical",
              "College student - Final year",
              "College student - 1st to pre-final year",
              "Others",
            ].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="experience"
                  value={option}
                  checked={formData.experience === option}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="appearance-none w-4 h-4 border-2 rounded-full checked:bg-black checked:border-black"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
        {errors.experience && (
          <p className="text-red-500 text-xs mb-2">{errors.experience}</p>
        )}

        <div className="p-6">
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white w-full py-2 rounded-md text-sm"
          >
            Continue booking webinar
          </button>
        </div>

        <button
          onClick={() => setShowForm(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-3xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CourseJourneyContent;
