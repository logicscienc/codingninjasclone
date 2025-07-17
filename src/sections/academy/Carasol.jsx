import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sql from "./img/sql.png";
import chatgpt from "./img/chatgpt.webp";
import excel from "./img/excel.png";
import mat from "./img/mat.png";
import numpy from "./img/numpy.png";
import pandas from "./img/pandas.png";
import python from "./img/python.png";

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
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
      >
        {techLogos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img src={item.src} alt={item.alt} className="h-14 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-4 px-4">
        <div className="swiper-button-prev cursor-pointer text-3xl font-bold text-gray-600">&lt;</div>
        <div className="swiper-button-next cursor-pointer text-3xl font-bold text-gray-600">&gt;</div>
      </div>
    </div>
  );
};

export default Carasol;


