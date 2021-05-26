import { useState } from 'react'
import Data from './Data'



const Story = () => {
    
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
        alert('Data Add Successfully!')
        console.log(values.about)
        console.log(values.heading)
        console.log(values.code)
        console.log(values.subHeading)
       

    }
  
    
    return {handleChange, values, handleSubmit}
    
}



export default Story