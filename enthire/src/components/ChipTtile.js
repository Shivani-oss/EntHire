import React from 'react'
import { Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    chip: {
        color: '#f44336',
    }
})

function ChipTitle(props) {
    const classes = useStyles()
    const { label } = props
    return(
        <Chip className={classes.chip} label={label}></Chip>
    )
}

export default ChipTitle
