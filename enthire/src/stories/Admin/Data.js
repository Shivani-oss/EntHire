import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Badge, Box, ListItem, List, ListItemText, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Heading from '../../components/Heading'
import SubHeading from '../../components/SubHeading'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '500%',
        padding: '20px',
        margin: theme.spacing(2)
    },
    para: {
        display: 'flex',
        fontSize: '17px',
        maxWidth:1000
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 10,
        maxWidth: 500
    },
    button: {
        margin: theme.spacing(2),
    },
}))


function Data() {
    const classes = useStyles()
    const story = useSelector(state => state.story.oneStoryData)

    return (
        <>
            <div className={classes.root}>
                <Heading>{story.heading}</Heading>
                <SubHeading>{story.subHeading}</SubHeading>
                <Typography className={classes.para}  variant="subtitle1">{story.about}</Typography>
                <div className={classes.paper} style={{ marginLeft: 25 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b>{story.code}</b></code>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Data
