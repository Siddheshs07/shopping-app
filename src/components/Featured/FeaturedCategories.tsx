'use client';
import { featuredCategorySlides } from '../../constants/index';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeaturedCategories = () => {
  const slides = featuredCategorySlides;
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
      <h1 className='text-2xl font-bold mb-2 text-center uppercase'>
        Featured Categories
      </h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        arrows={false}
        className='mb-2'
      >
        {slides.map((e) => (
          <div className='flex flex-col justify-center items-center '>
            <Image
              src={e.url}
              alt={e.title}
              width={150}
              height={75}
              key={e.title}
              className='rounded-full'
            />
            <p className='font-bold uppercase text-center'>{e.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCategories;
