import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './userReducer'

function Data() {
    const user = useSelector(selectUser)
    return (
        <div>
           <p>{user.heading}</p>
        </div>
    )
}

export default Data