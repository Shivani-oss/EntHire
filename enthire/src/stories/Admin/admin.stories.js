import React from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Heading from '../../components/Heading'
import useStory from './Story'
import Data from './Data'
import { useSelector } from 'react-redux'

export default {
    title: 'Admin',
}




const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4),
        display: 'flex',
        flexWrap: 'wrap',
    },
    text: {
        margin: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(3)
    }
}))



export const Add_Data = () => {
    const classes = useStyles()
    const { handleChange, handleSubmit, values } = useStory()
    const story = useSelector(state => state.story.oneStoryData)
    global.f = story.heading
    return (
        <>

            <Heading> Add Stories!! 📕📗📘 </Heading>
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                <Typography className={classes.text} variant='h6'>Heading</Typography>
                <TextField
                    fullWidth
                    name="heading"
                    id="outlined-basic"
                    label="Heading"
                    variant="outlined"
                    value={values.heading}
                    onChange={handleChange}
                    required
                />
                <Typography className={classes.text} variant='h6'>Sub - Heading</Typography>
                <TextField
                    fullWidth
                    name="subHeading"
                    id="outlined-basic"
                    label="Sub-Heading"
                    variant="outlined"
                    value={values.subHeading}
                    onChange={handleChange}
                />
                <Typography className={classes.text} variant='h6'>About</Typography>
                <TextField
                    id="outlined-textarea"
                    label="About"
                    multiline
                    fullWidth
                    variant="outlined"
                    value={values.about}
                    name="about"
                    onChange={handleChange}
                    required
                />
                <Typography className={classes.text} variant='h6'>Code</Typography>
                <TextField
                    id="outlined-multiline-static"
                    label="Code"
                    multiline
                    fullWidth
                    rows={8}
                    variant="outlined"
                    value={values.code}
                    name="code"
                    onChange={handleChange}
                />
                <Button variant="contained" className={classes.button} color="secondary" type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}

export const Show_Data = () => <Data/>
