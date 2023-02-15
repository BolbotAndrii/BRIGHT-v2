import React from 'react';
import item from '../../../images/iphone.webp'

const BasketItem = () => {

    return (
        <>
            <div className='flex w-full justify-between mb-4 border p-4 rounded-2xl gap-4 items-center'>
                <div className='w-10'>
                    <img src={item.src} alt=""/>
                </div>
                <div className='grow'>
                    <div className='flex justify-between pb-4'>
                        <div>
                            <p className='text-base'>Iphone 14 pro max</p>
                            <span className='text-xs text-gray-600'>46548</span>
                        </div>
                        <div>
                            <button type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-xl w-20'>2000$</p>
                       <div className='flex items-center'>
                           <div className='mr-16'>
                               <button type='button'>-</button>
                               <input className='w-10 text-center border mx-2' type="text" defaultValue='1'/>
                               <button type='button'>+</button>
                           </div>
                           <p className='font-bold text-xl'>6000$</p>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasketItem;