import { createSlice } from "@reduxjs/toolkit";


const dataSilce = createSlice({
    name: 'data',
    initialState: {
        data: []
    },
    reducers: {
        data: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { data } = dataSilce.actions
export default dataSilce.reducer