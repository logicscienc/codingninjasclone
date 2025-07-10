import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import boy from "../assets/boy.jpeg";
import tie from "../assets/tie.jpeg";
import stanford from "../assets/stanford.png";
import one from "../assets/one.png";
import placement from "../assets/placement.png";
import gd from "../assets/gd.mp4";
import rupees from "../assets/rupees.jpg";
import arrow from "../assets/arrow.png";
import c from "../assets/c.svg";
import fi from "../assets/fi.svg";
import Logo from "../assets/logo.svg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import checklist from '../assets/checklist.svg';

// Animation variants
const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariant = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const iconVariants = (color) => ({
  hidden: {
    scale: 0.8,
    opacity: 0.5,
    backgroundColor: "#1f2937",
    filter: "grayscale(100%)",
  },
  visible: {
    scale: 1,
    opacity: 1,
    backgroundColor: color,
    filter: "grayscale(0%)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

// Individual block section
const Block = ({ title, subtitle, icon, variant }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="flex flex-col items-center mt-24">
      <motion.div
        variants={item}
        initial="hidden"
        animate={controls}
        className="text-5xl md:text-6xl font-bold leading-tight text-center"
      >
        {title}
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        animate={controls}
        className="text-base md:text-2xl text-gray-400 mt-2 text-center"
      >
        {subtitle}
      </motion.div>

      {/* Line + Icon */}
      <div className="relative h-[150px] flex flex-col items-center mt-12">
        <div className="absolute top-0 w-1 h-full border-r-2 border-dotted border-gray-600" />
        <motion.div
          className="absolute top-0 w-1 border-r-2 border-gray-400"
          variants={lineVariant}
          initial="hidden"
          animate={controls}
        />
        <motion.div
          className="w-16 h-16 mt-auto rounded-xl flex items-center justify-center"
          variants={variant}
          initial="hidden"
          animate={controls}
        >
          <img src={icon} alt="Icon" className="w-8 h-8" />
        </motion.div>
      </div>
    </div>
  );
};

const AlumniSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const container = {
    visible: { transition: { staggerChildren: 0.3 } },
    hidden: {},
  };

  const tableRows = [
    "Structured + problem solving based",
    "Fastest 1:1 doubt support",
    "Integrated prep platform",
    "Profiles highlighted on Naukri",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center pt-20 md:pt-32 lg:pt-40 bg-[#0F0F0F] text-white px-4">
      {/* Top Static Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-center flex flex-col items-center gap-6"
      >
        <motion.div
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          9 years of
        </motion.div>
        <motion.div
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          transforming
        </motion.div>
        <motion.div
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          tech careers
        </motion.div>
        <motion.div
          variants={item}
          className="w-20 h-20 mt-10 rounded-md flex items-center justify-center"
        >
          <img src={boy} alt="Icon" className="w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* All Animated Blocks */}
      <Block
        title="1.5 Lac+ learners"
        subtitle="cracked dream roles at top tech companies"
        icon={tie}
        variant={iconVariants("#10B981")}
      />
      <Block
        title="1,400 Alumni in MAANG"
        subtitle="& more in 103/111 Unicorns"
        icon={rupees}
        variant={iconVariants("#ec4899")}
      />
      <Block
        title="1 Cr+ highest CTC"
        subtitle="after completing the course"
        icon={arrow}
        variant={iconVariants("#3B82F6")}
      />
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold leading-tight mt-20 text-center"
      >
        128% average hike
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-base md:text-2xl text-gray-400 text-center"
      >
        via our placement cell
      </motion.div>

      <button className="mt-20 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-sm flex items-center gap-2">
        Explore Offerings
        <MdKeyboardDoubleArrowUp className="text-white text-lg" />
      </button>

      <h2
        className="mt-32 text-[10rem] font-extrabold text-transparent tracking-tight"
        style={{
          WebkitTextStroke: "2px transparent",
          position: "relative",
        }}
      >
        <span
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-300 to-cyan-400"
          style={{
            WebkitTextStroke: "2px",
            WebkitTextFillColor: "transparent", // ensures the inside is background-colored
            WebkitTextStrokeColor: "transparent",
            filter: "drop-shadow(0 0 6px rgba(0, 255, 255, 0.4))",
          }}
        >
          WHY US
        </span>
        WHY US
      </h2>

      <div className="w-full flex justify-center px-4 py-12 bg-[#0F0F0F] text-white">
        <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-end gap-8">
          {/* Left Video */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden border border-gray-700">
            <video
              src={gd}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              loop
            />
            <div className="text-center py-2 text-sm font-semibold bg-black">
              After your doubt is resolved
            </div>
            <div className="p-4">
              <p className="text-orange-500 font-semibold text-lg">
                Ankush Singla
              </p>
              <p className="text-gray-400 text-sm">
                Co-Founder of Coding Ninjas | Mentor
              </p>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-4 w-full md:w-[380px]">
            <div className="bg-[#2d2d2d] px-6 py-6 rounded-md flex items-center gap-4 shadow-sm">
              <img src={one} className=" w-6 h-6" />
              <span className="text-white font-medium text-lg">
                Fastest 1:1 doubt support
              </span>
            </div>
            <div className="px-6 py-6 rounded-md flex items-center gap-4 transition-all duration-300 hover:bg-[#2d2d2d] cursor-pointer border border-gray-700">
              <img src={stanford} className=" w-6 h-6" />
              <span className="text-white font-medium text-lg">
                Stanford/IIT/MAANG faculty
              </span>
            </div>
            <div className="px-6 py-6 rounded-md flex items-center gap-4 transition-all duration-300 hover:bg-[#2d2d2d] cursor-pointer border border-gray-700">
              <img src={placement} className="w-6 h-6" />
              <span className="text-white font-medium text-lg">
                Placement assistance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* advantage comparision table */}
      <div className="w-full bg-[#0F0F0F] py-20 px-4 flex flex-col items-center">

        <h2 className="text-center text-blue-500 font-semibold mb-8 mt-4 text-xl">
            The Coding Ninjas advantage
          </h2>
        <div className="w-full max-w-[1000px] border border-gray-700 rounded-2xl overflow-hidden">
         

          <div>
            <div className="grid grid-cols-4 bg-[#141414] text-left py-4 px-6 border-b border-gray-700 font-semibold text-sm md-text-base">
              <div></div>
              <div className="text-center">
                <img src={c} alt="CN logo" className="w-10 h-10 mx-auto mb-1" />
              </div>
              <div className="text-center">Free Resources</div>
              <div className="text-center">Other courses</div>
              <div className="text-center">&nbsp;</div>
            </div>

            {tableRows.map((text, idx) => (
              <div
                key={text}
                className={`grid grid-cols-4 px-6 py-5 text-sm md:text-base ${
                  idx % 2 === 0 ? "bg-black" : "bg-[#141414]"
                }`}
              >
                <div className="text-left">{text}</div>
                <div className="flex justify-center">
                  <img src={checklist} className="w-6 h-6" />
                </div>
                <div className="flex justify-center">
            <RxCross1 className="text-gray-500 text-lg" />
          </div>

                <div className="text-center flex justify-center items-center">
                  {idx === 0 ? (
                    <TiTick className=" text-lg" />
                  ) : (
                    <RxCross1 className=" text-lg" />
                  )}
                </div>
              </div>
            ))}

            {/* Gradient Progress Bars */}
            <div ref={ref} className="mt-12 px-6">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="CN" className="w-30 h-30" />
                <span className="text-pink-500 text-sm ml-auto flex items-center gap-1">
                  Your dream role, faster and with confidence!{" "}
                  <img src={fi} className="w-6 h-6" />
                </span>
              </div>
              <motion.div
                className="h-1 mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full opacity-60"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              <div className="mt-6 text-sm text-white/70">Others</div>
              <motion.div
                className="h-1 mt-2 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full opacity-60"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="mt-10 mb-20 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-sm flex items-center gap-2">
        Explore Offerings
        <MdKeyboardDoubleArrowUp className="text-white text-lg" />
      </button>
    </section>
  );
};

export default AlumniSection;
