import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from './dataSlice'
import userReducer from './userSlice'
import cartReducer from "./cartSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const reducer = combineReducers({
    data: dataReducer,
    user: userReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
    reducer:  persistedReducer,
})