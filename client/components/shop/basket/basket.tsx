import React from 'react';
import BasketItem from "./basket.item";
import BasketFooter from "./basket.footer";

const Basket = () => {
    return (
        <>
            <h3 className='mt-4 text-2xl font-bold px-4'>Basket</h3>
          <div className='mt-4'>
              <BasketItem />
              <BasketItem />
              <BasketItem />
              <BasketFooter />
          </div>
        </>
    );
};

export default Basket;