import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../../redux/actions'
import {getMenuState} from "../../../redux/selectors";

const Hamburger = () => {
    const dispatch = useDispatch()
    const menuState = useSelector(getMenuState)

    const menuToggle = () => {
        dispatch(Actions.toggleMenu({ isOpen: !menuState } ) )
    }

    return (
        <div className='w-3/12 flex items-center justify-center text-white xl:hidden' onClick={menuToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    );
};

export default Hamburger;