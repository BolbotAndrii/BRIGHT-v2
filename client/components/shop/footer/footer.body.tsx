import React from 'react';
import pr24 from '../../../images/pr24.png'
import visa from '../../../images/v24.png'
import mc from '../../../images/mc24.png'

const FooterBody = () => {
    return (
        <div className='grid grid-cols-4 text-white'>
            <ul>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
            </ul>
            <ul>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
            </ul>
            <ul>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
                <li><a href="">Element</a></li>
            </ul>
            <ul>
                <h3 className='font-bold mb-4'>Payments</h3>
                <div className='flex justify-start gap-2 items-center'>
                    <img src={pr24.src} alt=""/>
                    <img src={visa.src} alt=""/>
                    <img src={mc.src} alt=""/>
                </div>
            </ul>
        </div>
    );
};

export default FooterBody;