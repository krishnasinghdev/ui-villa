import Image, { StaticImageData } from 'next/image';
import React from 'react';
type CardType = {
  img: StaticImageData;
  title: String;
  desc: String;
};
export default function VisitCard({ img, title, desc }: CardType) {
  return (
    <div className='flex flex-col bg-white'>
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
    </div>
  );
}
