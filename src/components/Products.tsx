import Link from 'next/link';
import Image from 'next/image';
import { getallCloths } from '../../data';

const Products = () => {
  let allCloths = getallCloths();
  return (
    <div className='grid grid-cols-4 gap-5 '>
      {allCloths.map((e) => (
        <div className='flex flex-col justify-center items-center border border-gray-400 rounded-xl'>
          <div className='flex justify-center'>
            <Image
              src={e.link}
              alt={e.name}
              width={200}
              height={200}
              className='p-4 w-80 h-96 rounded-[2.5rem]'
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
  );
};

export default Products;
