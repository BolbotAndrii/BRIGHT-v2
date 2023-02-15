import * as actions from './actions'
import {createReducer, combineReducers} from "@reduxjs/toolkit";

const toggleMenu = createReducer(
    { isOpen: false },
    {
            [actions.toggleMenu.type]: (state, { payload }) => {
                return {...state, ...payload}
            }
        }
    )

export const common = combineReducers({
    toggleMenu
})