import React, { useEffect, useRef, useState } from "react";
import heart from "../assets/heart.svg";

const textBlocks = [
  "Resolve doubts any time through chat, voice notes or calling.",
  "500+ dedicated Teaching Assistants to resolve your doubts quickly",
  "5/5 rating for 90% doubt resolutions",
];

const Stuck = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  //   const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const itemsRef = useRef([]);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const topIndex = Number(
            visibleEntries[0].target.getAttribute("data-index")
          );
          setActiveIndex(topIndex);
        }
      },
      {
        threshold: [0.3, 0.5, 0.75],
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex justify-center bg-black pb-32 py-20 "
    >
      <div className="absolute top-0 left-1/2 -translate-x-[500px] h-full z-10 ">
        <div className="relative h-full w-[2px]">
          {/* Dotted White Line (behind) */}
          <div className="absolute top-0 left-0 h-full w-[2px] border-l-2 border-dotted border-white z-0" />

          {/* Animated Orange Line (on top) */}
          <div
            className="absolute top-0 left-0 w-[2px] bg-yellow-400 z-10 transition-all duration-500 ease-in-out"
            style={{ height: `${scrollHeight}%` }}
          />

          {/* Image half on the left of line */}
          <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-14 h-14 z-50  ">
            <img
              src={heart}
              alt="Floating Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative max-w-[1100px] w-full px-4 mx-auto z-20 ">
        <div className="flex items-center justify-between mb-10 ml-[calc(50%-500px+36px)]  mt-12">
          <h2 className="text-white text-xl md:text-xl font-semibold ml-2">
            Always available when you get stuck
          </h2>
        </div>
        <div className="ml-[100px]">
          {textBlocks.map((text, idx) => (
            <p
              key={idx}
              data-index={idx}
              ref={(el) => (itemsRef.current[idx] = el)}
              className={`text-3xl md:text-5xl font-semibold transition-all duration-700 ease-out my-24 transform
      ${
        activeIndex === idx
          ? "text-yellow-500 scale-105 opacity-100"
          : "text-gray-600 scale-95 opacity-60"
      }
    `}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stuck;
