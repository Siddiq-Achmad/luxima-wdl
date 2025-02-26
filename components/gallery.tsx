"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Image } from "@heroui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="w-full">
      <Swiper
        className="gallery-slider "
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
        }}
        modules={[Autoplay]}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width="100%"
              height="auto"
              radius="lg"
              className="w-full rounded-3xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
