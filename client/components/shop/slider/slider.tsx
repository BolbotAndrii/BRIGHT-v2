import React from 'react';
import slides from '../../../images/slide-1.jpg'

const Slider = () => {
    return (
        <>
            <div className='shop-slider rounded-2xl overflow-hidden max-h-96'>
                <img src={slides.src} className='object-cover h-full w-full' alt=""/>
            </div>
        </>
    );
};

export default Slider;