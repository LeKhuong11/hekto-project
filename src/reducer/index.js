import { combineReducers } from "redux";
import ApiReducer from "./apiReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
    fetchApi: ApiReducer,
    cart: cartReducer
})

export default rootReducer;