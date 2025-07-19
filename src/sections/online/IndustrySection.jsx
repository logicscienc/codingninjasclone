import React from "react";

const IndustrySection = () => {
  return (
    <div className="relative w-full bg-[#1f1812] py-20 flex justify-center items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_30px_at_center,_#2b221b_1px,_transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] text-center px-4">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          The industry is looking for Data <br />
          Analysts
        </h2>
      </div>
    </div>
  );
};

export default IndustrySection;
