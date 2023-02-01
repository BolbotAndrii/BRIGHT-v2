import React from 'react';
import {SidebarMenu} from "./sidebar.menu";
import tree from "../../../utils/pages.data";

export const Sidebar = () => {
    return (
        <div className='hidden bg-neutral-800  xl:w-3/12  menu xl:block'>
            <SidebarMenu element={tree} />
        </div>
    );
};

