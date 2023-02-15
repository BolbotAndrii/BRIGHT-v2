import React from 'react'
import Head from "next/head"
import MainShopLayout from "../layouts/shop/main.shop.layout";
import Slider from "../components/shop/slider/slider";
import CatalogMenuSections from "../components/shop/header/catalog.menu/catalog.menu.sections";
import CatalogTop from "../components/shop/catalog/catalog.top/catalog.top";
import SeoText from "../components/shop/content/seo.text";
import CatalogNews from "../components/shop/catalog/catalog.news/catalog.news";
import CatalogSale from "../components/shop/catalog/catalog.sale/catalog.sale";



const Index = () => {

    const descr = 'What is Lorem Ipsum?\n' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    return (
        <>
           <MainShopLayout>
               <Head>
                   <title>Main page</title>
                   <meta name="viewport" content="width=device-width, initial-scale=1" />
               </Head>
              <div className='flex mt-8 gap-4 items-start'>
                  <CatalogMenuSections />
                  <Slider />
              </div>
              <div className='mt-8'>
                  <CatalogTop />
              </div>
               <div className='mt-8'>
                   <CatalogNews />
               </div>
               <div className='mt-8'>
                   <CatalogSale />
               </div>

               <div>
                   <SeoText description={descr}/>
               </div>
           </MainShopLayout>

        </>
    )
}

export default Index