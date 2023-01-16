import React from 'react';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className='bg-main h-screen bg-cover container'>
      <div className='flex h-screen justify-center items-center  flex-col text-white text-center'>
        <motion.h1
          initial={'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 70 },
          }}
          className='text-4xl sm:text-5xl lg:text-7xl font-f1 font-semibold text-black'
        >
          Welcome to <span className='italic'>Villa</span> resort
        </motion.h1>
        <motion.h2
          initial={'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 70 },
          }}
          className='mt-2  sm:text-xl lg:text-2xl text-black'
        >
          Discover our world-class hotel & restaurant resort.
        </motion.h2>
        <motion.div
          initial={'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 70 },
          }}
          className='flex flex-col w-full sm:w-auto px-12 gap-4 sm:flex-row mt-8'
        >
          <button className='py-2 px-8 border-2 bg-villa hover:bg-[#c6164e] border-villa rounded-full transition duration-500 tracking-wide'>
            EXPLORE THE BEAUTY
          </button>
          <button className='py-2 px-8 border-2 rounded-full hover:bg-white hover:text-gray-500 transition duration-500 tracking-wide'>
            DOWNLOAD
          </button>
        </motion.div>
      </div>
    </section>
  );
}
