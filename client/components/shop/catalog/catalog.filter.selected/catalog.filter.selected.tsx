import React from 'react';

const CatalogFilterSelected = () => {
    return (
        <>
             <div className='rounded-2xl border p-4'>
                <p>Your choice</p>
                 <div>
                     <div className='flex justify-between items-center py-2'>
                         <p>Selected 1</p>
                         <button>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                             </svg>
                         </button>
                     </div>
                     <div className='flex justify-between items-center py-2'>
                         <p>Selected 2</p>
                         <button>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                             </svg>
                         </button>
                     </div>
                     <div className='flex justify-between items-center py-2'>
                         <p>Selected 3</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                     </div>
                 </div>
                 <button className='border-b border-dashed border-b-gray-600'>Clear all</button>
             </div>
        </>
    );
};

export default CatalogFilterSelected;