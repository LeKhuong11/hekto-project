import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer: {
        data: dataReducer,
        user: userReducer
    }
})