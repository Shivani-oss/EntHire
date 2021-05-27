import { configureStore } from '@reduxjs/toolkit'
import storyReducer from '../Admin/userReducer'


export default configureStore({ 
    reducer: {
        story: storyReducer
    }
})

