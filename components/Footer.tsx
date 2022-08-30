import React from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='container text-white bg-[#1A1A1A]'>
      <div className='mx-6 py-10 text-center'>
        <div className='grid grid-1 grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <div className='  font-semibold mb-4 flex items-center justify-center '>
              <h1 className='text-3xl font-f1 italic'>Villa</h1>
            </div>
            <p className='text-gray-400'>Your best places.</p>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 flex justify-center '>
              Quick Menu
            </h6>

            <Link href='/'>
              <a className='text-gray-400 block'>Home</a>
            </Link>
            <Link href='/hotel'>
              <a className='text-gray-400 block'>Hotels</a>
            </Link>
            <Link href='/about'>
              <a className='text-gray-400 block'>About</a>
            </Link>
            <Link href='/blog'>
              <a className='text-gray-400 block'>Blog</a>
            </Link>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 flex justify-center '>
              Useful links
            </h6>
            <Link href='/'>
              <a className='text-gray-400 block'>Support</a>
            </Link>
            <Link href='/'>
              <a className='text-gray-400 block'>Managers</a>
            </Link>
            <Link href='/'>
              <a className='text-gray-400 block'>Services</a>
            </Link>
            <Link href='/contact'>
              <a className='text-gray-400 block'>Contact</a>
            </Link>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 flex justify-center '>
              Contact
            </h6>
            <ul className='text-gray-400'>
              <li>Abc, Area Plot1</li>
              <li>Near Ney York </li>
              <li>+938-493-5892</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
