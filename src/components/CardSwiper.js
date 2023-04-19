import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import Card from "./Card";
import Grid from "./Grid";

export default function CardSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className=" ">
          
         
          <SwiperSlide>
            <div className="text-red-500 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-red-500 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-red-500 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-red-500 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-red-500 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
              Slide 7
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-red-500 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
              Slide 8
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-red-500 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
              Slide 2
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

// Map all cards
// {homes.map(home => (
//   <Card key={home.id} {...home} />
// ))}
