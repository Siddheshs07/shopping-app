import Link from 'next/link';
import Image from 'next/image';
import { dataProps } from '@/types';
import { getallCloths, getFeaturedProducts } from '../../data';

const Products = () => {
    let featuredCloths = getFeaturedProducts();
    return (
        <div className='grid grid-cols-2 gap-4 '>
            {featuredCloths.map((e) => (
                <div className='flex flex-row border  border-gray-400 rounded-xl'>
                    <div className='object-center m-auto'>
                        <Image
                            src={e.link}
                            alt={e.name}
                            width={200}
                            height={200}
                            className='rounded-full bg-center items-center p-4 w-48 h-48'
                        />
                    </div>
                    <div className=' text-justify p-4 m-4'>
                        <h1>Brand: {e.name}</h1>
                        <p>Description: {e.description}</p>
                        <p>Discounted Price: {e.finalPrice} </p>{' '}
                        <span>Discount: {e.discount}</span>
                        <p className='line-through'>Price: {e.strickPrice}</p>
                        <p>Sizes: {e.productSize}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
