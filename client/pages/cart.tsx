import React from 'react';
import MainShopLayout from "../layouts/shop/main.shop.layout";
import Basket from "../components/shop/basket/basket";
import Head from "next/head";

const BasketCart = () => {
    return (
        <MainShopLayout>
            <Head>
                <title>Cart</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Basket />
        </MainShopLayout>
    );
};

export default BasketCart;