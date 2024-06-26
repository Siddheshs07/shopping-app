'use client';
import Image from 'next/image';
import { topBannerSlides } from '@/constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
const TopBanner = () => {
  const slides = topBannerSlides;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
      slidesToSlide: 8, // optional, default to 1.
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
    <div className='m-3'>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
      >
        {slides.map((e) => (
          <Link href='/'>
            <Image
              src={e.url}
              alt={e.title}
              width={150}
              height={75}
              key={e.title}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default TopBanner;
