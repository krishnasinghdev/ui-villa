import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import VisitCard from '../components/VisitCard';
import { visitData } from '../data';
export default function hotel() {
  return (
    <>
      <Header t1={'Our Hotel'} t2={'Enjoy your stay.'} />
      <main className='bg-[#F8F9FA] container '>
        <div className='grid grid-cols-1  items-center lg:grid-cols-2'>
          <div className='bg-main bg-cover h-[35rem]'></div>
          <div className='p-8'>
            <h1 className='text-4xl mb-6 font-f1 sm:text-5xl lg:text-7xl'>
              {' '}
              5 Star Hotel
            </h1>
            <p className='mb-4 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              aliquid, est reiciendis repellat sapiente consequatur aperiam,
              ducimus, id minima eligendi officiis, qui expedita sint culpa
              illum magnam ipsam adipisci possimus? Sit aspernatur eaque id sunt
              fuga facere hic laudantium, aperiam!
            </p>
            <p className='mb-4 text-gray-400'>
              Provident dolor aperiam similique maiores quasi. Quo repudiandae
              fuga commodi itaque dolores accusamus, dolor esse adipisci labore
              harum blanditiis in totam ipsum vero necessitatibus incidunt
              reprehenderit, id iste quas, ab, non! Voluptates, reiciendis culpa
              iure deserunt voluptatum itaque. Quos, soluta.
            </p>

            <button className=' text-white bg-villa py-2 px-4 rounded-full mt-3 hover:bg-[#c6164e] border-villa transition ease-in-out duration-300'>
              Learn More
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1  items-center lg:grid-cols-2'>
          <div className='p-8'>
            <h1 className='text-4xl mb-6 font-f1 sm:text-5xl lg:text-7xl'>
              {' '}
              5 Star Hotel
            </h1>
            <p className='mb-4 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              aliquid, est reiciendis repellat sapiente consequatur aperiam,
              ducimus, id minima eligendi officiis, qui expedita sint culpa
              illum magnam ipsam adipisci possimus? Sit aspernatur eaque id sunt
              fuga facere hic laudantium, aperiam!
            </p>
            <p className='mb-4 text-gray-400'>
              Provident dolor aperiam similique maiores quasi. Quo repudiandae
              fuga commodi itaque dolores accusamus, dolor esse adipisci labore
              harum blanditiis in totam ipsum vero necessitatibus incidunt
              reprehenderit, id iste quas, ab, non! Voluptates, reiciendis culpa
              iure deserunt voluptatum itaque. Quos, soluta.
            </p>

            <button className=' text-white bg-villa py-2 px-4 rounded-full mt-3 hover:bg-[#c6164e] border-villa transition ease-in-out duration-300'>
              Learn More
            </button>
          </div>
          <div className='bg-common bg-cover h-[35rem]'></div>
        </div>
      </main>

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
          More Hotel Features
        </h1>
        <p className='text-lg lg:text-xl sm:w-3/4 text-center  mx-auto  my-6 text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>
        <main className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
          {visitData.slice(0, 3).map(({ img, title, desc }, index) => (
            <VisitCard img={img} title={title} desc={desc} key={index} />
          ))}
        </main>
      </section>
    </>
  );
}
