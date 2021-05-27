import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { stories } from './userReducer'



const Story = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        heading: '',
        subHeading: '',
        about: '',
        code: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(stories(values))
        setValues({
            heading: '',
            subHeading: '',
            about: '',
            code: ''
        })
        alert('Data Add Successfully!')
    }
  
    
    return {handleChange, values, handleSubmit}
    
}



export default Story