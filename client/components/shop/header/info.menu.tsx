import React from 'react';

const InfoMenu = () => {
    return (
        <div>
            <ul className='flex items-center justify-between shop-info-menu'>
                <li><a href="/">Delivery</a></li>
                <li><a href="/">For user</a></li>
                <li><a href="/">Contacts</a></li>
                <li><a href="/">Payment</a></li>
                <li><a href="/">News</a></li>
            </ul>
        </div>
    );
};

export default InfoMenu;