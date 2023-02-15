import React from 'react';
import Link from "next/link";
import {IMenu} from "../../../interfaces/models";
import SidebarMenuSecondDepth from "./sidebar.menu.second.depth";
import {useRouter} from "next/router";


interface IMenuElement {
    itemMenu: IMenu
}

export const SidebarElement: React.FC<IMenuElement> = ({itemMenu}: IMenuElement) => {
    const router = useRouter()

    return (
       <>
           <li>
               <div  className={ `${router.pathname ===  itemMenu.path && itemMenu.type !== 'paragraph' ? 'active menu-item flex items-center' : ' menu-item flex items-center'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ml-4">
                       <path strokeLinecap="round" strokeLinejoin="round" d={itemMenu.icon} />
                   </svg>
                   {
                       itemMenu.type == 'link' ?
                           <Link href={itemMenu.path} className="w-full block text-white px-8 py-4" >{itemMenu.title}</Link>
                           :
                           <div className='flex justify-between items-center w-full pr-4'>
                               <p className='w-full block text-white px-8 py-4'>{itemMenu.title}</p>
                               <span className='cursor-pointer'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                   </svg>
                               </span>
                           </div>
                   }
               </div>

               {/*<SidebarMenuSecondDepth SDMenu={}/>*/}
           </li>
       </>
    );
};
