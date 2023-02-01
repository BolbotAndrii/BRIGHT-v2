import React from 'react';
import {IMenu} from "../../../interfaces/models";
import {SidebarElement} from "./sidebar.element";

interface IMenuProps {
    element: IMenu[]
}

export const SidebarMenu  = ( props: IMenuProps ) => {

    return (
       <>
          <ul>
              {
                  props.element.map( item => (

                         <SidebarElement itemMenu={item} key={item.id}/>

                  ))
              }

          </ul>
       </>
    );
};
