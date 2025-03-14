/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

type ThumbsGalleryCarouselProps = {
  images: string[];
};

const ThumbsGalleryCarousel = ({ images }: ThumbsGalleryCarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="m-4">
      <Swiper
        className="w-full h-56 md:h-96"
        spaceBetween={50}
        pagination
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
      >
        {images.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-full w-full">
                <Image
                  src={value}
                  layout="fill"
                  alt={value}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 h-24 md:h-40"
      >
        {images.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-full w-full">
                <Image
                  layout="fill"
                  src={value}
                  alt={value}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ThumbsGalleryCarousel;
