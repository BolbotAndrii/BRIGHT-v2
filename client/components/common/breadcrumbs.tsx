import React from 'react';

const Breadcrumbs = () => {
    return (

        <>
            <ol className='flex items-center justify-start px-4 py-4'>
                <li className='flex items-center justify-start'>
                    <a href="/" className='mr-2'>
                        Main
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </li>
                <li className='flex items-center justify-start ml-2'>
                    <a href="/" className='mr-2'>
                        <p>Catalog</p>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </li>
                <li className='flex items-center justify-start ml-2'>
                    <a href="/" className='mr-2'>
                        Item
                    </a>
                </li>
            </ol>
        </>
    );
};

export default Breadcrumbs;