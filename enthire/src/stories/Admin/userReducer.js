import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
    },
    reducers: {
        stories: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {stories} = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer