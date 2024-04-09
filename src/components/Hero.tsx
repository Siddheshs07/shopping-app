import React from 'react';
import FeaturedSections from './FeaturedSections';
import TopBanner from './TopBanner';
import MainBanner from './MainBanner';
import Press from './Press';
import SiteInfo from './SiteInfo';
import Products from './Products';

const Hero = () => {
    return (
        <div className=' w-full'>
            <TopBanner />
            <MainBanner />
            {/* <Products /> */}
            <FeaturedSections />
            <Press />
            <SiteInfo />
        </div>
    );
};

export default Hero;
