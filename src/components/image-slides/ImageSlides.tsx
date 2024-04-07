'use client';

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from 'next/image';

import { ImageSlidesData } from '@/constrain/CardsItem';

export default function ImageSlides() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      speed={1000}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true,  }}
    >
      {
        ImageSlidesData.map(item => (
          <SwiperSlide key={item.id}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 p-10 justify-center items-center">
              <Image className="w-full m-auto" src={item.profile} alt="client-say-sample-image" />
              <div>
                <h2 className="font-semibold text-text-color">{item.name}</h2>
                <p className="py-5">{item.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};