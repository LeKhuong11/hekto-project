import { createSlice  } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: '',
        password: '',
        name: 'Khuong'
    },
    reducers: {
        user: (state, action) => {
            state.user = action.payload.user
            state.password = action.payload.password
        },
        userLogout: (state) => {
            state.user = ''
            state.password = ''
        }
    }
})

export const { user, userLogout } = userSlice.actions
export default userSlice.reducer