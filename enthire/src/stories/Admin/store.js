import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Admin/userReducer'



export default configureStore({ 
    reducer: {
        user: userReducer
    }
})

