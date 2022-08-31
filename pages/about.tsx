import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import { testData } from '../data';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function about() {
  return (
    <>
      <Header t1={'About Us'} t2={'Enjoy your stay.'} />
      <section className='container'>
        <motion.h1
          initial={'hidden'}
          whileInView='visible'
          viewport={{ amount: 'some' }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className='text-4xl sm:text-5xl lg:text-7xl lg:w-3/4 text-center mx-auto  mt-16 lg:mt-32 mb-6 font-f1'
        >
          Hotel Gallery
        </motion.h1>
        <motion.p
          initial={'hidden'}
          whileInView='visible'
          viewport={{ amount: 'some' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className='text-lg lg:text-xl sm:w-3/4 text-center  mx-auto  my-6 text-gray-400'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </motion.p>
        <Slider />
      </section>
      <section className='bg-round pb-16 relative -mt-[15rem] pt-[15rem] container'>
        <motion.h1
          initial={'hidden'}
          whileInView='visible'
          viewport={{ amount: 'some' }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className='text-4xl sm:text-5xl lg:text-7xl lg:w-3/4 text-center mx-auto  mt-16 lg:mt-32 mb-6 font-f1'
        >
          Leadership
        </motion.h1>
        <motion.p
          initial={'hidden'}
          whileInView='visible'
          viewport={{ amount: 'some' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className='text-lg lg:text-xl sm:w-3/4 text-center  mx-auto  my-6 text-gray-400'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </motion.p>
        <main className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
          {testData.map((img, index) => (
            <motion.div
              initial={'hidden'}
              whileInView='visible'
              viewport={{ amount: 'some' }}
              transition={{ duration: 0.7, delay: index / 2 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 },
              }}
              className='flex flex-col bg-white'
              key={index}
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
              <p className='text-gray-400 mt-4 mb-2 px-4'>CEO, CO-FOUNDER</p>
              <p className='text-xl font-f1 px-4 pb-4'>Vince Richardson</p>
            </motion.div>
          ))}
          {testData.map((img, index) => (
            <motion.div
              initial={'hidden'}
              whileInView='visible'
              viewport={{ amount: 'some' }}
              transition={{ duration: 0.7, delay: index / 2 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 },
              }}
              className='flex flex-col bg-white'
              key={index}
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

              <p className='text-gray-400 mt-4 mb-2 px-4'>CTO, CO-FOUNDER</p>
              <p className='text-xl font-f1 px-4 pb-4'>Jean Love</p>
            </motion.div>
          ))}
        </main>
      </section>
    </>
  );
}
