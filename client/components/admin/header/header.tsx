import React from 'react';
import Logo from "./logo";
import Hamburger from "./gamburger";

const Header = (props: any) => {
    return (
        <div className='bg-neutral-800 header flex justify-between'>
            <Logo />
            <Hamburger  />
        </div>
    );
};

export default Header;