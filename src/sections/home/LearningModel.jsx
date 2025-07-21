import React, { useEffect, useRef, useState } from "react";
import web_excel from "../../assets/web_excel.webp";
import web_learn from "../../assets/web_learn.webp";
import web from "../../assets/web.webp";
import rocket from "../../assets/rocket.svg";

const LearningModel = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Learn");

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

  const data = [
    {
      title: "Learn",
      description:
        "Experience seamless learning with problem solving modules, leaderboard and awards.",
      image: web_learn,
    },
    {
      title: "Excel",
      description:
        "Track your skill level and make meaningful progress for you to grow.",
      image: web_excel,
    },
    {
      title: "Standout",
      description:
        "Standout to recruiters, showcase ratings, get feedback and interview insights.",
      image: web,
    },
  ];

  const selected = data.find((item) => item.title === selectedCategory);

  return (
    <div
      ref={sectionRef}
      className="relative flex justify-center bg-white pb-32 "
    >
      <div className="absolute top-0 left-1/2 -translate-x-[500px] h-full z-10 hidden sm:block ">
        <div className="relative h-full w-[2px]">
          {/* Dotted White Line (behind) */}
          <div className="absolute top-0 left-0 h-full w-[2px] border-l-2 border-dotted border-white z-0" />

          {/* Animated Orange Line (on top) */}
          <div
            className="absolute top-0 left-0 w-[2px] bg-blue-400 z-10 transition-all duration-500 ease-in-out"
            style={{ height: `${scrollHeight}%` }}
          />

          {/* Image half on the left of line */}
          <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-14 h-14 z-50  ">
            <img
              src={rocket}
              alt="Floating Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative max-w-[1100px] w-full px-4 z-20">
        <div className="flex items-center justify-between mb-10  mt-12 pl-[calc(50%-500px+36px)] max-w-[1000px] w-full mx-auto">
          <h2 className="text-gray-800 text-xl md:text-xl font-semibold ml-1">
            A 3-stage learning model to turn you into a Coding Ninja
          </h2>
        </div>

        {/* Interactive Section */}
        <div className="hidden sm:flex mt-20 pl-[calc(50%-500px+36px)] max-w-[1000px] w-full mx-auto flex-col md:flex-row gap-10 items-start ">
          {/* Left: Text Tabs */}
          <div className="flex flex-col gap-8 w-full md:w-1/3">
            {data.map((item) => (
              <div
                key={item.title}
                onMouseEnter={() => setSelectedCategory(item.title)}
                className={`cursor-pointer border-l-4 pl-4 transition-all duration-300 ${
                  selectedCategory === item.title
                    ? "border-black text-black font-semibold"
                    : "border-blue-200 text-gray-600"
                }`}
              >
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-2/3 max-w-[600px]">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto rounded-md shadow-md transition-all duration-500"
            />
          </div>
        </div>
        {/* Mobile view (< 640px) */}
        <div className="sm:hidden mt-10 overflow-x-auto">
          <div className="flex gap-4 w-[150%]">
            {data.map((item) => (
              <div
                key={item.title}
                className="min-w-[250px] max-w-[250px] p-4 border border-gray-200 rounded-md shadow-md bg-white flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                 <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModel;
