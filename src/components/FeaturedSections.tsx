import React from 'react';
import FeaturedTheme from './Featured/FeaturedTheme';
import FeaturedCategories from './Featured/FeaturedCategories';
import FeaturedBrands from './Featured/FeaturedBrands';
import FeaturedProducts from './Featured/FeaturedProducts';

const FeaturedSections = () => {
  return (
    <div>
      <FeaturedTheme />
      <FeaturedCategories />
      <FeaturedBrands />
      <FeaturedProducts />
    </div>
  );
};

export default FeaturedSections;
