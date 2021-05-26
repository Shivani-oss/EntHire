import React from 'react'
import { Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    subHeading: {
        fontFamily: 'sans-serif',
        fontWeight: 550,
        marginTop:20
    }
})

function SubHeading(props) {
    const classes = useStyles()
    const { children } = props
    return (
        <Typography className={classes.subHeading} variant="h6">
            {children}
        </Typography>
    )
}

export default SubHeading
