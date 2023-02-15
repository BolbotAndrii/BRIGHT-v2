import React from 'react';
import CatalogElement from "../catalog.element/catalog.element";

const CatalogNews = () => {
    return (
        <>
               <h3 className='font-bold text-4xl'>News products</h3>
               <div className='grid grid-flow-col-dense gap-4'>
                   <CatalogElement />
                   <CatalogElement />
                   <CatalogElement />
                   <CatalogElement />
                   <CatalogElement />
               </div>
        </>
    );
};

export default CatalogNews;