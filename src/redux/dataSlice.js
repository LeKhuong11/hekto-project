import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk(
    'data/getItems', 
    async () => {
        return await fetch('https://fe21-db.vercel.app/hekto')
            .then(res => res.json())
    }
)

const dataSilce = createSlice({
    name: 'data',
    initialState: {
        data: [],
        isLoading: false
    },
    extraReducers: {
        [getItems.pending]: (state) => {
            state.isLoading = true
        },
        [getItems.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isLoading = false
        },
        [getItems.pending]: (state) => {
            state.isLoading = false
        }
    } 
})

export default dataSilce.reducer