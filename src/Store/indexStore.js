import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'

const indexStore = configureStore({
    reducer: {
        auth : authReducer
    }
})

export default indexStore