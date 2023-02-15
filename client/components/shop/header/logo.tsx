import React from 'react';
import logo from '../../../images/logo_black.png'
import Link from  'next/link'

const Logo = () => {
    return (
        <>
            <Link href='/' className='flex text-white w-3/12 h-full p-4'>
                <img src={logo.src} className='h-full min-w-[128px] object-contain' alt=""/>
            </Link>
        </>
    );
};

export default Logo;