import React from 'react';
import Link from "next/link";
import {IMenu} from "../../../interfaces/models";
import SidebarMenuSecondDepth from "./sidebar.menu.second.depth";

interface IMenuElement {
    itemMenu: IMenu
}

export const SidebarElement: React.FC<IMenuElement> = ({itemMenu}: IMenuElement) => {
    return (
       <>
           <li>
               <div  className='flex items-center menu-item'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ml-4">
                       <path strokeLinecap="round" strokeLinejoin="round" d={itemMenu.icon} />
                   </svg>
                   {
                       itemMenu.type == 'link' ?
                           <Link href={itemMenu.path} className='w-full block text-white px-8 py-4'>{itemMenu.label}</Link>
                           : <p className='w-full block text-white px-8 py-4'>{itemMenu.label}</p>
                   }
               </div>
               <SidebarMenuSecondDepth SDMenu={itemMenu.secondDepth}/>
           </li>
       </>
    );
};
