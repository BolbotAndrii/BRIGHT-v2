import React from 'react';

const CatalogFilter = () => {
    return (
        <>
            <div className='border rounded-2xl mt-4 p-4'>
                <div className='mb-6'>
                    <div className='flex justify-between items-center mb-4'>
                        <p>Country</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </div>

                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>Ukraine</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>USA</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>UK</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>Nhina</a>
                        </li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <div className='flex justify-between items-center mb-4'>
                        <p>Brand</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </div>
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>Bosch</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>Razer</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>Iphone</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>Siemens</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='flex justify-between items-center mb-4'>
                        <p>Model</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </div>
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>85</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>gr43</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>svf</a>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <a href="" className='ml-2'>454</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CatalogFilter;