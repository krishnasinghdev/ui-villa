type HeaderType = {
  t1: String;
  t2: String;
};
import { motion } from 'framer-motion';
export default function Header({ t1, t2 }: HeaderType) {
  return (
    <div className='bg-common w-full h-[65vh] bg-fixed flex justify-center flex-col items-center bg-cover text-white font-f1'>
      <motion.h1
        initial={'hidden'}
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className='text-6xl sm:text-7xl mb-4 text-center font-primary font-extrabold leading-1.5 '
      >
        {t1}
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
        className='text-xl  tracking-wider'
      >
        {t2}
      </motion.p>
    </div>
  );
}
