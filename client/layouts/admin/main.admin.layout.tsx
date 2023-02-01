import Header from "../../components/admin/header/header";
import {Sidebar} from "../../components/admin/sidebar/sidebar";
import React from "react";



const MainAdminLayout = ({children}: any) => {
    return (
        <div className=''>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='bg-neutral-900 w-full content p-2'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainAdminLayout;