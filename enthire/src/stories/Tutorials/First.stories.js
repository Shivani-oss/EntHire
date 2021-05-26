import React from 'react'
import { Typography, Badge, Box, ListItem, List, ListItemText, Paper, Button, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import Heading from '../../components/Heading'
import SubHeading from '../../components/SubHeading'
import ChipTitle from '../../components/ChipTtile'


export default {
    title: 'Tutorials/Getting Started',
}



const useStyles = makeStyles((theme) => ({
    root: {
        width: '500%',
        padding: '20px'
    },
    tag: {
        color: '#f44336',
    },
    para: {
        display: 'flex',
        fontSize: '17px',
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(2),
    },
}))


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'success.main',
    m: 2,
    border: 3,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth:800
}

export const Streamlit_App = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Heading>Create your first Streamlit app</Heading>
                <Typography className={classes.para} style={{ marginLeft: 5 }} variant="subtitle1">First, we’ll create a new Python script and import Streamlit.</Typography>
                <List>
                    <ListItem>
                        <ListItemText>1. Create a new Python file named <ChipTitle label="first_app.py"></ChipTitle>, then open it with your IDE or text editor.</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>2. Next, import Streamlit.</ListItemText>
                    </ListItem>
                    <div className={classes.paper} style={{ marginLeft: 25 }}>
                        <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                            <code><b>import streamlit as st</b></code>
                            <br />
                            <code># To make things easier later, we're also importing numpy and pandas for working with sample data.</code>
                            <br />
                            <code><b>import numpy as np</b></code>
                            <br />
                            <code><b>import pandas as pd</b></code>
                        </Paper>
                    </div>
                    <Box display="flex" flexDirection="row" ml={3} mt={-2}>
                        <Box p={4}>
                            <Badge color="secondary" badgeContent={'pandas'} />
                        </Box>
                        <Box p={4}>
                            <Badge color="error" badgeContent={'numpy'} />
                        </Box>
                        <Box p={4}>
                            <Badge color="primary" badgeContent={'streamlit'} />
                        </Box>
                    </Box>
                    <ListItem>
                        <ListItemText>3. Run your app. A new tab will open in your default browser. It’ll be blank for now. That’s OK.</ListItemText>
                    </ListItem>
                    <div className={classes.paper} style={{ marginLeft: 25 }}>
                        <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                            <code><b>streamlit run first_app.py</b></code>
                            <br />
                        </Paper>
                    </div>
                    <ListItem>
                        <ListItemText>Running a Streamlit app is no different than any other Python script. Whenever you need to view the app, you can use this command.</ListItemText>
                    </ListItem>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<EmojiObjectsIcon />}
                    >Tip</Button>
                    <Box borderRadius="borderRadius" {...defaultProps}>
                        <Typography style={{ padding: 5 }} variant="subtitle1">
                            Did you know you can also pass a URL to streamlit run? This is great when combined with Github Gists.
                            <br />
                            For example:
                            <br />
                            <i>$ streamlit run https://raw.githubusercontent.com/streamlit/demo-uber-nyc-pickups/master/streamlit_app.py</i>
                        </Typography>
                    </Box>
                    <ListItem>
                        <ListItemText>4. You can kill the app at any time by typing Ctrl+c in the terminal. </ListItemText>
                    </ListItem>
                </List>
            </div>
        </>
    )
}


export const Adding = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Heading>Add Text and Data</Heading>
                <SubHeading>Add a title</SubHeading>
                <Typography className={classes.para} variant="subtitle1">Streamlit has a number of ways to add text to your app. Check out our &nbsp; <Link href="#" style={{ textDecoration: 'none' }}>API reference</Link> &nbsp; for a complete list.</Typography>
                <Typography className={classes.para} variant="subtitle1">Let’s add a title to test things out :</Typography>
                <div className={classes.paper} style={{ margin: 15 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b>st.title('My first app')</b></code>
                        <br />
                    </Paper>
                </div>
                <Typography className={classes.para} variant="subtitle1">That’s it! Your app has a title. You can use specific text functions to add content to
                your app, or you can use  &nbsp; <ChipTitle label="st.write()" /> &nbsp; and add your own markdown. <br/>
                </Typography>
                <SubHeading>Write a data frame</SubHeading>
                <Typography className={classes.para} variant="subtitle1">Along with &nbsp; <Link href="#" style={{ textDecoration: 'none' }}>magic commands</Link> &nbsp;,  &nbsp; <ChipTitle label="st.write()" /> &nbsp; is Streamlit’s “Swiss Army knife”.  </Typography>
                <Typography className={classes.para} variant="subtitle1">You can pass almost anything to text, data, Matplotlib figures, Altair charts, and more. Don’t worry, Streamlit will figure it out and render things the right way.</Typography>
                <div className={classes.paper} style={{ margin: 15 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b>st.write("Here's our first attempt at using data to create a table:")</b></code>
                        <br />
                        <code><b>st.write(pd.DataFrame({'{'}
                        'first column :' [1, 2, 3, 4],
                        'second column :' [10, 20, 30, 40]
                        {'}'}))</b>
                        </code>
                        <br />
                    </Paper>
                </div>
                <Typography className={classes.para} variant="subtitle1">There are other data specific functions like &nbsp; <ChipTitle label="st.dataframe()" /> &nbsp;  and &nbsp; <ChipTitle label="st.table()" /> &nbsp; that you can also use for displaying data.</Typography>
                <Typography className={classes.para} variant="subtitle1">Check our advanced guides on displaying data to understand when to use these features and how to add colors and styling to your data frames.</Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<EmojiObjectsIcon />}
                >Tip</Button>
                <Box borderRadius="borderRadius" {...defaultProps}>
                    <Typography style={{ padding: 5 }} variant="subtitle1">
                        For this guide we’re using small amounts of data so that we can move quickly. You can check out our Tutorial on creating a data explorer to see an example of 
                        <br/>
                        how to load data from an API and use &nbsp;<Link href="#" style={{ textDecoration: 'none' }}> @st.cache</Link>&nbsp; to cache it.
                    </Typography>
                </Box>
            </div>
        </>
    )
}

Adding.storyName = 'Adding Text/Data'