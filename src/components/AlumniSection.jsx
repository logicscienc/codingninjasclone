import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import boy from "../assets/boy.jpeg";
import tie from "../assets/tie.jpeg";
import rupees from "../assets/rupees.jpg";
import arrow from "../assets/arrow.png";

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

// Icon styles
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

// Individual animated section
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
    <div ref={ref} className="flex flex-col items-center mt-20">
      <motion.div
        variants={item}
        initial="hidden"
        animate={controls}
        className="text-5xl md:text-6xl font-bold leading-tight"
      >
        {title}
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        animate={controls}
        className="text-base md:text-2xl text-gray-400 mt-2"
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

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center pt-20 md:pt-32 lg:pt-40 bg-[#0F0F0F] text-white px-4"
    >
      {/* Top Static Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
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
          className="w-20 h-20 mt-10 rounded-md flex items-center justify-center"
          variants={item}
        >
          <img src={boy} alt="Icon" className="w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Animated Blocks */}
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
      <Block
        title="128% average hike"
        subtitle="via our placement cell"
        icon={boy}
        variant={iconVariants("#F59E0B")}
      />
    </section>
  );
};

export default AlumniSection;


