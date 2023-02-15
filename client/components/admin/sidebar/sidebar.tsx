import React, {useEffect, useState} from 'react';
import {SidebarMenu} from "./sidebar.menu";
import {GetSidebar} from "../../../utils/api";
import {getCookie} from "../../../common/common";
import {getMenuState} from '../../../redux/selectors'
import {useSelector} from "react-redux";
import {useWindowSize} from "../../../hooks/windowSize";

export const Sidebar = () => {
    const [sidebar, setSidebar] = useState([])
    const menuState = useSelector(getMenuState)
    const size = useWindowSize()

    useEffect( () => {
        GetSidebar(getCookie('NEXT_LOCALE')).then( ( { data }: any ) => {
            setSidebar(data)
        }).catch( (e) => {
            console.error(e)
        })
    }, [menuState, size])

    return (
        <>

            <div className={`${menuState == false && size.width < 1280 ? 'hidden' : ' w-full bg-neutral-800  xl:w-3/12 menu xl:block' }` }>
                <SidebarMenu element={sidebar} />
            </div>

        </>

    );
};

