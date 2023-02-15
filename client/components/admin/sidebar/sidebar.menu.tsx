import React, {useEffect, useState} from 'react';
import {IMenu} from "../../../interfaces/models";
import {SidebarElement} from "./sidebar.element";

interface IMenuProps {
    element: IMenu[]
}


export const SidebarMenu  = ( props: IMenuProps ) => {
    const fDepth = props.element.filter( elem => { return elem.depth === 1 } )
    const sDepth = props.element.filter( elem => { return elem.depth === 2 } )

    console.log( props.element )
    return (
       <>
          <ul>
              {
                  fDepth.map( item => (
                      <SidebarElement itemMenu={item} key={item.id} />
                  ))
              }
          </ul>
       </>
    );
};
