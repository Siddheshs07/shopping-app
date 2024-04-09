import { footerLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { FaShippingFast, FaRupeeSign } from 'react-icons/fa';
import { TbReplace } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className=' flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className=' flex max-md:flex-col  flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                {/* <div className=' flex flex-col justify-start items-start gap-6'></div> */}
                <div className='footer__links'>
                    {footerLinks.map((e) => (
                        <div key={e.title} className='footer__link'>
                            <h3 className=' font-bold'>{e.title}</h3>
                            {e.link.map((item) => {
                                return (
                                    <Link
                                        key={item.title}
                                        href={item.url || '/'}
                                        className=' text-gray-500'
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p className='text-center text-grey-900 text-xl font-semibold'>
                    Our site uses secure payment gateways. All major credit &
                    debit cards accepted.
                </p>
                <div className='flex justify-center items-center flex-row mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                    <p className=' flex items-center justify-start  p-2'>
                        <FaShippingFast className=' h-10 w-10 mr-2' />
                        <span>
                            FREE SHIPPING ON ALL PREPAID ORDERS OVER Rs. 499
                        </span>
                    </p>
                    <p className=' flex items-center justify-start px-4'>
                        <FaRupeeSign className=' h-10 w-10 mr-2' />
                        <span>
                            CASH ON DELIVERY AVAILABLE TO MOST PARTS OF INDIA
                        </span>
                    </p>
                    <p className=' flex items-center justify-start px-4'>
                        <TbReplace className=' h-10 w-10 mr-2' />
                        <span>EASY 15 DAY RETURN POLICY</span>
                    </p>
                </div>
            </div>
            <div className='flex justify-between items-center flex-row  border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p>© 2024 Redwolf, All Rights Reserved</p>
                <div className='footer__copyrights-link'>
                    <Link href='/' className='text-gray-500'>
                        Privacy Policy
                    </Link>
                    <Link href='/' className='text-gray-500'>
                        Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
