import React from 'react';
import CatalogSectionElements from "../../../components/shop/catalog/catalog.section.elements/catalog.section.elements";
import MainShopLayout from "../../../layouts/shop/main.shop.layout";
import Head from "next/head";
import CatalogSection from "../../../components/shop/catalog/catalog.sections/catalog.section";


const Section = () => {
    return (
        <MainShopLayout>
            <Head>
                <title>Computers</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <CatalogSection />
        </MainShopLayout>
    );
};

export default Section;