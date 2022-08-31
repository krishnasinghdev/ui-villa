import React from 'react';
import Header from '../components/Header';
import VisitCard from '../components/VisitCard';
import { visitData } from '../data';
export default function blog() {
  return (
    <>
      <Header t1={'Blog'} t2={'Events, news and activities in the hotel.'} />
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 container'>
        {visitData.map(({ img, title, desc }, index) => (
          <VisitCard
            time={index}
            img={img}
            title={title}
            desc={desc}
            key={index}
          />
        ))}
        {visitData.map(({ img, title, desc }, index) => (
          <VisitCard
            img={img}
            time={index}
            title={title}
            desc={desc}
            key={index}
          />
        ))}
      </section>
    </>
  );
}
