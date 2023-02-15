import React from 'react';
import FooterBottom from "./footer.bottom";
import FooterBody from "./footer.body";

const Footer = () => {
    return (
        <footer className='shop-footer'>
            <div className="shop-content py-8">
                <FooterBody />
            </div>

            <FooterBottom />
        </footer>
    );
};

export default Footer;