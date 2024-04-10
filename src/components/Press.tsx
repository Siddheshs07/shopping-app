'use client';

import { pressSlide } from '@/constants';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Press = () => {
  const slides = pressSlide;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className='w-full m-0 mt-5'>
      <h1 className='text-2xl font-bold mb-2 text-center uppercase'>PRESS</h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        className='mb-6'
      >
        {slides.map((e) => (
          <div className='flex flex-col justify-center items-center '>
            <Image
              src={e.url}
              alt={e.title}
              width={130}
              height={100}
              key={e.title}
              className='rounded-3xl mb-5'
            />
            {/* <p className='font-bold uppercase text-center'>{e.title}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Press;
