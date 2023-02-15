import Header from "../../components/admin/header/header";
import {Sidebar} from "../../components/admin/sidebar/sidebar";
import React from "react";
import {useSelector} from "react-redux";
import {getMenuState} from "../../redux/selectors";
import {useWindowSize} from "../../hooks/windowSize";



const MainAdminLayout = ({children}: any) => {
    const menuState = useSelector(getMenuState)
    const size = useWindowSize()
    return (
        <div className=''>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className={ `${menuState == true && size.width < 1280 ? 'hidden' : 'bg-neutral-900 w-full content p-2'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainAdminLayout;