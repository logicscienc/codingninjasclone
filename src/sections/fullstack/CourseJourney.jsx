import React, { useRef, useEffect, useState } from "react";
import JourneyContent from "./CourseJourneyContent";

const SECTIONS = [
  { id: "about", label: "About the course" },
  { id: "curriculum", label: "Curriculum" },
  { id: "journey", label: "Course journey" },
  { id: "benefits", label: "Benefits" },
  { id: "plans", label: "Plans" },
  { id: "faqs", label: "FAQs" },
];

const CourseJourney = () => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveId(id);
  };

  return (
    <>
      {/* Spacer to avoid layout shift */}
      <div style={{ height: `${navHeight}px` }} />

      {/* Sticky Navbar */}
      <div ref={navRef} className="sticky top-16 z-50 bg-transparent">
        <div className="max-w-[600px] mx-auto bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
          <nav className="flex flex-wrap justify-center gap-1 text-xs font-medium">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`px-4 py-1 rounded-full transition-all ${
                  activeId === id
                    ? "bg-black text-white"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 px-4 max-w-[1000px] mx-auto">
        <section id="about" />
        <section id="curriculum" />
        <section id="journey">
          <JourneyContent />
        </section>
        <section id="benefits" />
        <section id="plans" />
        <section id="faqs" />
      </div>
    </>
  );
};

export default CourseJourney;

















