import { createSlice } from '@reduxjs/toolkit'

export const storySlice = createSlice({
    name: "story",
    initialState: {
        oneStoryData: {
            heading: '',
            subHeading: '',
            about: '',
            code: ''
        }
    },
    reducers: {
        stories: (state, action) => {
            // console.log("Function Called Reducer");
            //console.log(action.payload)
            state.oneStoryData = action.payload
        }
    }
})

export const { stories } = storySlice.actions

export default storySlice.reducer