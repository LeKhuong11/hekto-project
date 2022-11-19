import { createSlice  } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        name: null,
        avatar: null
    },
    reducers: {
        user: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.avatar = action.payload.avatar
        },
        userLogout: (state) => {
            state.name = null
            state.email = null
            state.avatar = null
        }
    }
})

export const { user, userLogout } = userSlice.actions
export default userSlice.reducer