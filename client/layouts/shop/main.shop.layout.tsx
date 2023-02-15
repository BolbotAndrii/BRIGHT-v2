import React from "react";
import Header from "../../components/shop/header/header";
import Footer from "../../components/shop/footer/footer";
import Breadcrumbs from "../../components/common/breadcrumbs";
import {useRouter} from "next/router";




const MainShopLayout = ({children}: any) => {
    const router = useRouter()

    return (
        <>
            <Header />

            <main className="shop-content">
                {
                    router.pathname !== '/' && <Breadcrumbs />
                }
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MainShopLayout;