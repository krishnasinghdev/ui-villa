import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { sliderData } from '../data';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function Slider() {
  return (
    <motion.div
      initial={'hidden'}
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
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
    </motion.div>
  );
}
