import React from 'react';
import logo from '../../../images/logo.png'

const Logo = () => {
    return (
       <>
           <a href='/' className='flex text-white w-3/12 h-full p-4'>
               <img src={logo.src} className='h-full min-w-[128px] object-contain' alt=""/>
           </a>
       </>
    );
};

export default Logo;