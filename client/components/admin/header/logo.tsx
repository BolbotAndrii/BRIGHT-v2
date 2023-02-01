import React from 'react';
import logo from '../../../images/bright_1.4.png'

const Logo = () => {
    return (
        <div className='flex text-white w-3/12 h-full p-4'>
            <img src={logo.src} className='h-full min-w-[128px] object-contain' alt=""/>
        </div>
    );
};

export default Logo;