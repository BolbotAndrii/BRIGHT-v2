import React from 'react';
import TopAds from "./topAds";
import Logo from "./logo";
import InfoMenu from "./info.menu";
import ChangeLang from "./change.lang";
import CatalogMenuBtn from "./catalog.menu/catalog.menu.btn";
import Search from "./search";
import LoginBtn from "./login.btn";
import Favorite from "./favorite";
import BasketHeader from "./basket.header";

const Header = () => {
    return (
        <>
           <header>
               <div className="shop-content grid grid-cols-1 grid-rows-3-custom">
                   <TopAds />

                   <div className='grid grid-cols-3 items-center px-4'>
                       <Logo />
                       <InfoMenu />
                       <ChangeLang />
                   </div>
                   <div className='grid grid-cols-3 shop-catalog-menu items-center rounded-2xl px-4'>
                       <CatalogMenuBtn />
                       <Search />
                       <div className='flex items-center justify-end'>
                           <LoginBtn />
                           <Favorite />
                           <BasketHeader />
                       </div>
                   </div>
               </div>
           </header>
        </>
    );
};

export default Header;