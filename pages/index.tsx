import type { NextPage } from 'next';
import Hero from '../components/Hero';
import VisitCard from '../components/VisitCard';
import { visitData, testData } from '../data';
import Slider from '../components/Slider';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <h1 className='text-gray-400 container mt-16 mb-6'>YOU CAN VISIT</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container gap-4'>
        {visitData.map(({ img, title, desc }, index) => (
          <VisitCard
            img={img}
            title={title}
            desc={desc}
            time={index}
            key={index}
          />
        ))}
      </div>
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
          A gorgeous place to enjoy your life.
        </motion.h1>
        <motion.p
          initial={'hidden'}
          whileInView='visible'
          viewport={{ amount: 'some' }}
          transition={{ duration: 0.7, delay: 0.1 }}
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
          Recent Blog Post
        </motion.h1>
        <motion.p
          initial={'hidden'}
          whileInView='visible'
          viewport={{ amount: 'some' }}
          transition={{ duration: 0.7, delay: 0.1 }}
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
          {visitData.slice(0, 3).map(({ img, title, desc }, index) => (
            <VisitCard
              img={img}
              title={title}
              desc={desc}
              time={index}
              key={index}
            />
          ))}
        </main>
      </section>
      <motion.h1
        initial={'hidden'}
        whileInView='visible'
        viewport={{ amount: 'some' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className='text-4xl sm:text-5xl lg:text-7xl lg:w-3/4 text-center mx-auto container mt-16 lg:mt-32 mb-6 font-f1'
      >
        Testimonial
      </motion.h1>
      <main className='grid grid-cols-1 sm:grid-cols-3 container gap-8 mb-8'>
        {testData.map((img, index) => (
          <motion.div
            initial={'hidden'}
            whileInView='visible'
            viewport={{ amount: 'some' }}
            transition={{ duration: 0.7, delay: index / 2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className='flex flex-col   items-center'
            key={index}
          >
            <Image
              src={img}
              height={100}
              width={100}
              alt={'title'}
              className='rounded-full m-auto text-center'
            />

            <p className='text-lg italic font-f1 mt-4 mb-2'>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim
              facilis laborum voluptate id porro, culpa maiores quis, blanditiis
              laboriosam alias”
            </p>
          </motion.div>
        ))}
      </main>
    </>
  );
};

export default Home;
