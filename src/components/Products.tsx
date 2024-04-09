import Link from 'next/link';
import Image from 'next/image';
import { dataProps } from '@/types';
import { getallCloths, getFeaturedProducts } from '../../data';

const Products = () => {
    let featuredCloths = getFeaturedProducts();
    return (
        <div className='flex flex-wrap gap-10 justify-evenly items-center mt-5 '>
            {featuredCloths.map((e) => (
                <div>
                    <Image src={e.link} alt={e.name} width={200} height={200} />
                    <h1>Brand: {e.name}</h1>
                    <p>Description: {e.description}</p>
                    <hr />
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Products;
