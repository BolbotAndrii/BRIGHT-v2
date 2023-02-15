import React from 'react';
import CatalogElement from "../catalog.element/catalog.element";


const CatalogSectionElements = () => {
    return (
        <>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
                 <CatalogElement />
             </div>

        </>
    );
};

export default CatalogSectionElements;