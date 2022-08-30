import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { navLinks } from '../data';
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const border = 'boder-8 border-red-400';
  return (
    <>
      <nav className='flex justify-between px-4 sm:px-8 py-4 font-semibold bg-transparent absolute top-0 z-0 w-full text-white text-3xl'>
        <Link href='/'>
          <a className='font-f1 italic'>Villa</a>
        </Link>
        <AiOutlineMenu onClick={() => setShowMenu(true)} />
      </nav>
      {showMenu && (
        <section className='w-screen h-screen flex flex-col sm:flex-row justify-evenly items-start pl-4 sm:items-center bg-white z-10 fixed'>
          <GrClose
            className='text-3xl font-semibold absolute right-0 top-0 mr-4 lg:mr-16 mt-4'
            onClick={() => setShowMenu(false)}
          />
          <div className='flex flex-col '>
            {navLinks.map(({ path, title }, i) => (
              <Link href={path} key={i}>
                <a
                  className={`mb-4 text-4xl font-f1 hover:bg-villa transition-all ${
                    router.asPath === path ? 'bg-villa' : ''
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {title}
                </a>
              </Link>
            ))}
          </div>
          <div>
            <h1 className='text-gray-400 text-2xl mb-4'>CONTACT INFO</h1>
            <p className='mb-1'> 98 West 21th Street, Suite 721 </p>
            <p className='mb-1'> New York NY 10016 </p>
            <p className='mb-1'> info@yourdomain.com </p>
            <p className='mb-1'> (+1) 435 3533 </p>
          </div>
          <div>
            <h1 className='text-gray-400  text-2xl mb-4'>CONNECT WITH US</h1>
            <p className='mb-1'>Twitter</p>
            <p className='mb-1'>Facebook</p>
            <p className='mb-1'>Instagram</p>
          </div>
        </section>
      )}
    </>
  );
}
