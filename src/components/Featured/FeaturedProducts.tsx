import React from 'react';
import Products from '../Products';
import { getFeaturedProducts } from '../../../data';
import Image from 'next/image';

const FeaturedProducts = () => {
  let featuredCloths = getFeaturedProducts();
  return (
    <div className='border rounded-3xl m-5 p-2'>
      <h1 className='text-2xl font-bold uppercase mb-5 mt-3 text-center '>
        Featured Products
      </h1>
      <div className='grid grid-cols-4 gap-3 '>
        {featuredCloths.map((e) => (
          <div className='flex flex-col justify-center items-center border border-gray-400 rounded-xl bg-red-200'>
            <div className='flex justify-center'>
              <Image
                src={e.link}
                alt={e.name}
                width={200}
                height={200}
                className='p-4 w-50 h-48'
              />
            </div>
            <div className=' text-justify'>
              <h1 className='font-bold'>{e.name}</h1>
              <span>{e.description}</span>
              <p> RS. {e.finalPrice} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
