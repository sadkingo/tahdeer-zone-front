"use client";
import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import sliderPlaceHolderImage from "@/public/images/carousel-placeholder.png"

const Carousel: FC<
  { className?: string, carouselImages?: string[] }> =
  ({
     className = "",
     carouselImages = [sliderPlaceHolderImage],
   }) => {
    return (
      <Swiper
        dir="ltr"
        modules={[Autoplay]}
        spaceBetween={0}
        speed={10000}
        allowTouchMove={false}
        slidesPerView={2}
        loop={true}
        pagination={{clickable: true, type: "bullets"}}
        autoplay={{delay: 0, disableOnInteraction: false}}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className={`w-full ${className}`}
      >
        {carouselImages.map((image, index) =>
          <SwiperSlide className="min-w-52 min-h-52" key={index}>
            <Image className="h-52 w-full rounded-xl p-2" draggable={false} src={image || sliderPlaceHolderImage}
                   alt="Slider Placeholder" fill/>
          </SwiperSlide>)
        }
      </Swiper>
    );
  }

export default Carousel;
