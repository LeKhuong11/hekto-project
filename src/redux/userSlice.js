import { createSlice  } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: '',
        name: 'User1'
    },
    reducers: {
        currentUser: (state, action) => {
            state.user = action.payload.user
        },
        userLogout: (state) => {
            state.user = ''
            state.password = ''
        }
    }
})

export const { currentUser, userLogout } = userSlice.actions
export default userSlice.reducer