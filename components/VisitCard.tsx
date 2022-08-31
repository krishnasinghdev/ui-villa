import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
type CardType = {
  img: StaticImageData;
  title: String;
  desc: String;
  time: number;
};
export default function VisitCard({ img, title, desc, time }: CardType) {
  return (
    <motion.div
      className='flex flex-col bg-white'
      initial={'hidden'}
      whileInView='visible'
      viewport={{ amount: 'some' }}
      transition={{ duration: 0.5, delay: time / 3 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -40 },
      }}
    >
      <div>
        <Image
          src={img}
          height={300}
          width={400}
          alt={'title'}
          className='hover:scale-110 shadow-lg transition duration-500 '
        />
      </div>
      <p className='text-gray-400 mt-4 mb-2 px-4'>{title}</p>
      <p className='font-f1 text-lg px-4 pb-4'>{desc}</p>
    </motion.div>
  );
}
