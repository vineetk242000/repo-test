import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination} from "swiper";
import Card from "./Card";
import Grid from "./Grid";
import axios from "axios";
import { useEffect } from "react";

export default function CardSwiper() {
  const [homes, setHomes] = useState([]);
  // console.log(homes);
  const [filter, setFilter] = useState({});
  useEffect(() => {
    axios.get(`/api/get-homes?${filter}`).then(res => {
      setHomes(res.data);
    });
  }, [filter]);
  return (
    <>
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        // responsive breakpoints
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <div className="">
          {homes.map(home => (
            <SwiperSlide key={homes.id} className="pr-5 ">
              <div>
                <Card key={home.id} {...home} />
              </div>{" "}
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="text-red-500 border border-red-600 bg-white h-48 w-48 rounded-md shadow-md p-10 ">
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
        <div className="">
        <span class="swiper-button-prev"></span>
      <span class="swiper-button-next"></span>
        </div>
      </Swiper>
    </>
  );
}

// Map all cards
// {homes.map(home => (
//   <Card key={home.id} {...home} />
// ))}
