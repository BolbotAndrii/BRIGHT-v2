import React from 'react';
import Link from "next/link";

const BasketFooter = () => {
    return (
        <>
             <div className='w-full flex justify-end items-center'>
                 <Link href='/order' className='shop-btn-order px-16 py-4 rounded-2xl text-white'>To order</Link>
             </div>
        </>
    );
};

export default BasketFooter;