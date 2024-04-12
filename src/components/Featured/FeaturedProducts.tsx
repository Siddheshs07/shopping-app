import React from 'react';
import Products from '../Products';
import { getFeaturedProducts } from '../../../data';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = () => {
  let featuredCloths = getFeaturedProducts();
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold uppercase mb-5 mt-3 text-center '>
        Featured Products
      </h1>
      <div className='grid grid-cols-4 gap-3 max-sm:grid-cols-1 max-md:grid-cols-3'>
        {featuredCloths.map((e) => (
          <div className='flex flex-col justify-center items-center border border-gray-400 rounded-3xl bg-zinc-200 p-2'>
            <div className='flex justify-center'>
              <Link href={e.link} key={e.id}>
                <Image
                  src={e.link}
                  alt={e.name}
                  width={400}
                  height={600}
                  className='p-4 w-80 h-96 rounded-[2.5rem]'
                />
              </Link>
            </div>
            <div className=' text-justify mb-2'>
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
