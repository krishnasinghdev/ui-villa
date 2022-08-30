import { StaticImageData } from 'next/image';
import ximg_1 from '../public/ximg_1.webp';
import ximg_2 from '../public/ximg_2.webp';
import ximg_3 from '../public/ximg_3.webp';
import ximg_4 from '../public/ximg_4.webp';
import xslider1 from '../public/xslider1.webp';
import xslider2 from '../public/xslider2.webp';
import xslider3 from '../public/xslider3.webp';
import xslider4 from '../public/xslider4.webp';
import xslider5 from '../public/xslider5.webp';
import xslider6 from '../public/xslider6.webp';
import xperson_1 from '../public/xperson_1.webp';
import xperson_2 from '../public/xperson_2.webp';
import xperson_3 from '../public/xperson_3.webp';

export const navLinks: {
  path: string;
  title: string;
}[] = [
  { path: '/', title: 'Home' },
  { path: '/hotel', title: 'Hotels' },
  { path: '/about', title: 'About' },
  { path: '/blog', title: 'Blog' },
  { path: '/contact', title: 'Contact' },
];

export const visitData: {
  img: StaticImageData;
  title: string;
  desc: string;
}[] = [
  {
    img: ximg_1,
    title: 'FEBRUARY 26, 2018',
    desc: 'Five Reasons to Stay at Villa Resort',
  },
  {
    img: ximg_2,
    title: 'FEBRUARY 26, 2018',
    desc: 'Five Reasons to Stay at Villa Resort',
  },
  {
    img: ximg_3,
    title: 'FEBRUARY 26, 2018',
    desc: 'Five Reasons to Stay at Villa Resort',
  },
  {
    img: ximg_4,
    title: 'FEBRUARY 26, 2018',
    desc: 'Five Reasons to Stay at Villa Resort',
  },
];

export const sliderData = [
  xslider1,
  xslider2,
  xslider3,
  xslider4,
  xslider5,
  xslider6,
];

export const testData = [xperson_2, xperson_1, xperson_3];
