import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SlidingDrawer from "../advanced/SlidingDrawer";
import brochurePDF from "../sharedSections/images/advancedtech.pdf";

const steps = [
  {
    emoji: "🚀",
    emotion: "Excited!",
    title: "Kickstart at E&ICT, IITG",
    bullets: [
      "Orientation by Ankush Singla",
      "Meet your program instructors",
      "Meet your peers",
    ],
  },
  {
    emoji: "😎",
    emotion: "Confident",
    title: "Feel like the Elite",
    bullets: [
      "Learn Generative AI, NLP, and AI Agents etc.",
      "Weekly live classes for clear concepts",
      "Curriculum crafted by seasoned experts",
    ],
  },
  {
    emoji: "😇",
    emotion: "Resilient",
    title: "Master Data Science",
    bullets: [
      "Hands-on projects & topic-wise assignments",
      "Get expert mentor feedback to boost your skills",
      "Get 1:1 AI doubt support",
    ],
  },
  {
    emoji: "😌",
    emotion: "Supported",
    title: "Experts help always",
    bullets: [
      "GenAI Project Portfolio",
      "Access Standout with an Advanced Certification",
      "NSDC Job Portal",
    ],
  },
   {
    emoji: "🤩",
    emotion: "Over the moon",
    title: "Succeed like the top 1%",
    bullets: [
      "GenAI Project Portfolio",
      "Access Standout with an Advanced Certification",
      "NSDC Job Portal",
    ],
  },
];

export default function GenAIJourney({ onUnlockClick }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(
    Array(steps.length).fill(false)
  );
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, steps.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = refs.current.indexOf(entry.target);
          if (idx !== -1) {
            setVisibleSteps((prev) => {
              const updated = [...prev];
              updated[idx] = entry.isIntersecting;
              return updated;
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const getTagColor = (emotion) => {
    switch (emotion) {
      case "Excited":
        return "bg-yellow-200 text-black";
      case "Confident":
        return "bg-pink-200 text-black";
      case "Resilient":
        return "bg-green-200 text-black";
      case "Supported":
        return "bg-blue-200 text-black";
      case "Over the moon":
        return "bg-blue-200 text-black";
      default:
        return "bg-gray-300 text-black";
    }
  };

//   const handleCurriculumClick = () => {
//     const openDrawerInstead = false; // set to true if you want drawer behavior

//     if (openDrawerInstead) {
//       setDrawerOpen(true);
//     } else {
//       onUnlockClick(); // opens PDF in a new tab
//     }
//   };
const handleCurriculumClick = () => {
  setDrawerOpen(true); // ✅ Open the drawer instead of PDF
};


  return (
    <div
      id="journey"
      className="relative mx-auto py-20 px-4"
      style={{ maxWidth: "1000px" }}
    >
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left Side Intro */}
        <div className="lg:w-1/3">
          <h5 className="text-sm text-blue-600 font-semibold mb-2">
            Program Journey
          </h5>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            It's not just a course; <br />
            <span className="text-blue-600">it's an experience.</span>
          </h2>
          <button
            className="bg-orange-500 text-white px-5 py-2 rounded font-semibold shadow hover:bg-orange-600 transition-all mt-3"
            onClick={handleCurriculumClick}
          >
            View curriculum
          </button>
        </div>

        {/* Right Side Timeline */}
        <div className="grid grid-cols-12 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (refs.current[idx] = el)}
              className="col-span-12 grid grid-cols-12 items-start mb-16 relative"
            >
              {/* Emoji Column */}
              <div className="col-span-1 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white text-xl z-10">
                  {step.emoji}
                </div>
                <span
                  className={`text-xs mt-1 px-2 py-0.5 rounded-full whitespace-nowrap ${getTagColor(
                    step.emotion
                  )}`}
                >
                  {step.emotion}
                </span>
              </div>

              {/* Connecting Line (Horizontal) */}
              <div className="col-span-1 h-1 relative mt-5">
                <motion.div
                  className="absolute top-1/2 left-0 h-1 bg-black"
                  animate={{ width: visibleSteps[idx] ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Text Column */}
              <div className="col-span-10 relative">
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <h4 className="text-md font-semibold mb-2">{step.title}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {step.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Vertical Line */}
                {idx < steps.length - 1 && (
                  <motion.div
                    className="absolute left-0 top-full ml-2 w-px bg-black"
                    animate={{ height: visibleSteps[idx] ? "64px" : "0px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sliding Drawer */}
      <SlidingDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        brochureLink={brochurePDF}
      />
    </div>
  );
}