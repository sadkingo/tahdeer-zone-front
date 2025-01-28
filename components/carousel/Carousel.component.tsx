"use client";
import { FC } from "react";

import "swiper/css";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import sliderPlaceHolderImage from "@/public/images/carousel-placeholder.png"
import Image from "next/image";

const Carousel: FC<
  { className?: string, reverseDirection?: boolean }> =
  ({
     className = "",
     reverseDirection = false,
   }) => {
    return (
      <Swiper
        dir="ltr"
        modules={[Autoplay]}
        spaceBetween={10}
        speed={10000}
        allowTouchMove={false}
        slidesPerView={2}
        loop={true}
        pagination={{clickable: true, type: "bullets"}}
        autoplay={{delay: 0, disableOnInteraction: false, reverseDirection}}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 5,
          },
        }}
        className={`w-full h-full bg-black dark:bg-white ${className}`}
      >
        {[
          sliderPlaceHolderImage,
          sliderPlaceHolderImage,
          sliderPlaceHolderImage,
          sliderPlaceHolderImage,
          sliderPlaceHolderImage,
          sliderPlaceHolderImage,
          sliderPlaceHolderImage,
          sliderPlaceHolderImage,
        ].map((_, index) =>
          <SwiperSlide className="min-w-52" key={index}>
            <Image className="h-52 w-full rounded-xl p-2" draggable={false} src={sliderPlaceHolderImage}
                   alt="Slider Placeholder"/>
          </SwiperSlide>)
        }
      </Swiper>
    );
  }

export default Carousel;
