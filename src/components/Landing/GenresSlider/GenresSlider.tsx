"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "@/styles/GeneresSliderStyle/GeneresSliderStyle.css";

import { FreeMode, Pagination } from "swiper/modules";
import GenresSliderCard from "./GenresSliderCard";

const GenresSlider = () => {
  return (
    <Swiper
      slidesPerView={1} // Show 1 slide per view on mobile
      breakpoints={{
        768: {
          slidesPerView: 5, // Show 5 slides per view on desktop (768px and above)
          spaceBetween: 20,
        },
      }}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper ml-[16px] mt-[20px] md:ml-[40px] md:mr-[40px] md:mt-[40px]"
    >
      <SwiperSlide className="bg-green-300">
        <GenresSliderCard />
      </SwiperSlide>
      <SwiperSlide className="bg-blue-300">
        <GenresSliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <GenresSliderCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default GenresSlider;
