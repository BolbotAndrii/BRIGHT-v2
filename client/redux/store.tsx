
import { configureStore } from '@reduxjs/toolkit'
import {common} from "./reducers";

const store = configureStore({
    reducer: { common }
})


export default store