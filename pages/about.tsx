import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import { testData } from '../data';
import Image from 'next/image';
export default function about() {
  return (
    <>
      <Header t1={'About Us'} t2={'Enjoy your stay.'} />
      <section className='container'>
        <h1 className='text-4xl sm:text-5xl lg:text-7xl lg:w-3/4 text-center mx-auto  mt-16 lg:mt-32 mb-6 font-f1'>
          Hotel Gallery
        </h1>
        <p className='text-lg lg:text-xl sm:w-3/4 text-center  mx-auto  my-6 text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>
        <Slider />
      </section>
      <section className='bg-round pb-16 relative -mt-[15rem] pt-[15rem] container'>
        <h1 className='text-4xl sm:text-5xl lg:text-7xl lg:w-3/4 text-center mx-auto  mt-16 lg:mt-32 mb-6 font-f1'>
          Leadership
        </h1>
        <p className='text-lg lg:text-xl sm:w-3/4 text-center  mx-auto  my-6 text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>
        <main className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
          {testData.map((img, index) => (
            <div className='flex flex-col bg-white' key={index}>
              <div>
                <Image
                  src={img}
                  height={300}
                  width={400}
                  alt={'title'}
                  className='hover:scale-110 shadow-lg transition duration-500 '
                />
              </div>
              <p className='text-gray-400 mt-4 mb-2 px-4'>CEO, CO-FOUNDER</p>
              <p className='text-xl font-f1 px-4 pb-4'>Vince Richardson</p>
            </div>
          ))}
          {testData.map((img, index) => (
            <div className='flex flex-col bg-white' key={index}>
              <div>
                <Image
                  src={img}
                  height={300}
                  width={400}
                  alt={'title'}
                  className='hover:scale-110 shadow-lg transition duration-500 '
                />
              </div>

              <p className='text-gray-400 mt-4 mb-2 px-4'>CTO, CO-FOUNDER</p>
              <p className='text-xl font-f1 px-4 pb-4'>Jean Love</p>
            </div>
          ))}
        </main>
      </section>
    </>
  );
}
