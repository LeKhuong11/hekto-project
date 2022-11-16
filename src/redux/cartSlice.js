import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
    },
    reducers: {
        cart: (state, action) => {
            const newList = [...state.data]
            newList.push(action.payload)

            state.data = newList
        },
        cartUpdate: (state, action) => {
            state.data = action.payload
        },
        clearCart: (state) => {
            state.data = []
        }
    },
    
})

export const { 
    cart, 
    cartUpdate, 
    clearCart 
} = cartSlice.actions
export default cartSlice.reducer