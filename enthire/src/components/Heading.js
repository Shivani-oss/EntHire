import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    heading: {
        fontWeight: 780,
        margin:2,
        fontFamily: 'sans-serif'
    },
})


function Heading(props) {
    const classes = useStyles()
    const {children} = props
    return (
        <div>
            <Typography className={classes.heading} variant="h4">
                {children}
            </Typography>
        </div>
    )
}

export default Heading