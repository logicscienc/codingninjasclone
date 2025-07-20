import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import sql from "./img/sql.png";
import chatgpt from "./img/chatgpt.webp";
import excel from "./img/excel.png";
import mat from "./img/mat.png";
import numpy from "./img/numpy.png";
import pandas from "./img/pandas.png";
import python from "./img/python.png";

// List of tech logos
const techLogos = [
  { src: numpy, alt: "NumPy" },
  { src: excel, alt: "Excel" },
  { src: sql, alt: "SQL" },
  { src: python, alt: "Python" },
  { src: chatgpt, alt: "ChatGPT" },
  { src: mat, alt: "Matplotlib" },
  { src: pandas, alt: "Pandas" },
];

const Carasol = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-10 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {techLogos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={item.src}
                alt={item.alt}
                className="h-12 md:h-14 object-contain mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6 px-4 md:px-8">
        <div className="swiper-button-prev text-3xl text-gray-600 font-bold cursor-pointer hover:text-black transition">
          &lt;
        </div>
        <div className="swiper-button-next text-3xl text-gray-600 font-bold cursor-pointer hover:text-black transition">
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Carasol;



