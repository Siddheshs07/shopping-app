import React from 'react';
import Products from '../Products';

const FeaturedProducts = () => {
    return (
        <div className='border rounded-3xl mb-3 mx-5 p-2'>
            <h1 className='text-2xl font-semibold underline mb-10 mt-3 text-center '>
                Featured Products
            </h1>
            <Products />
        </div>
    );
};

export default FeaturedProducts;
