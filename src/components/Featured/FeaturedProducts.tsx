import React from 'react';
import Products from '../Products';

const FeaturedProducts = () => {
    return (
        <div className='border rounded-3xl m-5 p-2'>
            <h1 className='text-2xl font-semibold mb-10 mt-3 text-center '>
                Featured Products
            </h1>
            <Products />
        </div>
    );
};

export default FeaturedProducts;
