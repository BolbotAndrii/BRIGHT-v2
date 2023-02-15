import React from 'react';
import CatalogFilterSelected from "../catalog.filter.selected/catalog.filter.selected";
import CatalogFilter from "../catalog.filter/catalog.filter";
import CatalogSort from "../catalog.sort/catalog.sort";
import CatalogSectionElements from "../catalog.section.elements/catalog.section.elements";

const CatalogSection = () => {
    return (
        <>

            <div>
                <h1 className='font-bold text-4xl py-4 px-4'>Computers</h1>
                      <div className='grid grid-cols-4 gap-4'>
                          <div>
                              <CatalogFilterSelected />
                              <CatalogFilter />
                          </div>
                          <div className='col-span-3' >
                              <CatalogSort />
                              <CatalogSectionElements />

                          </div>
                      </div>
            </div>
        </>
    );
};

export default CatalogSection;