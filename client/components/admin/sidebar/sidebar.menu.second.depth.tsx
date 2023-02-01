import React from 'react';
import Link from "next/link";
import {IMenu, ISDepth} from "../../../interfaces/models";


interface ISDMenuProps {
    SDMenu: ISDepth[]
}

const SidebarMenuSecondDepth: React.FC<ISDMenuProps> = ( props: ISDMenuProps ) => {

    return (
      <>
          <ul className='pl-14'>
              {
                  props.SDMenu.map( elem => (
                      <li className='flex items-center menu-item justify-start' key={elem.id}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ml-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d={elem.icon} />
                          </svg>
                          <Link href={elem.path} className='w-full block text-white px-8 py-2 text-sm'> {elem.label}</Link>
                      </li>
                  ))
              }
          </ul>
      </>
    );
};

export default SidebarMenuSecondDepth;