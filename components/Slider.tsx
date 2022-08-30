import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { sliderData } from '../data';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import Image from 'next/image';
export default function Slider() {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectFade, Pagination]}
      className='mySwiper'
    >
      {sliderData.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            src={img}
            height={750}
            width={1200}
            className='shadow-xl'
            alt='slider iamges'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
