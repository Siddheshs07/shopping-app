'use client';

import Carousel from 'react-material-ui-carousel';
import { mainBannerSlides } from '../constants/index';
import Image from 'next/image';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

const MainBanner = () => {
  const slides = mainBannerSlides;
  return (
    <div>
      <Carousel
        indicators={false}
        autoPlay={true}
        interval={3000}
        duration={1000}
        animation='slide'
        NextIcon={<GrCaretNext />}
        PrevIcon={<GrCaretPrevious />}
      >
        {slides.map((e) => (
          <Image
            src={e.url}
            alt={e.title}
            width={1920}
            height={450}
            key={e.title}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MainBanner;
