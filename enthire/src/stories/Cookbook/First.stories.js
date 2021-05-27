import React from 'react'
import { Typography, Badge, Box, ListItem, List, ListItemText, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Heading from '../../components/Heading'
import SubHeading from '../../components/SubHeading'
import ChipTitle from '../../components/ChipTtile'


export default {
    title: 'CookBook/Widget',
}



const useStyles = makeStyles((theme) => ({
    root: {
        width: '500%',
        padding: '20px',
        margin: theme.spacing(2)
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




export const Batch_Elements= () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Heading>Batch elements and Input widgets</Heading>
                <Typography className={classes.para} style={{marginTop:10 }} variant="subtitle1">In Streamlit, every widget interaction causes a rerun of the app. However, 
                there are times when you might want to 
                <br/>
                interact with a couple of widgets and  submit those interactions while triggering a single re-run of the app.</Typography>
                <Typography className={classes.para} variant="subtitle1">Using &nbsp; <ChipTitle label="st.form" /> &nbsp;  you can batch input widgets together and along with &nbsp; <ChipTitle label="st.form_submit_button" /> &nbsp; submit the state.</Typography>
                <br/>
                <div className={classes.paper} style={{ marginLeft: 25 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b># Forms can be declared using the 'with' syntax</b></code>
                        <br />
                        <code><b>with st.form(key='my_form'):</b></code>
                        <br />
                        <code><b> &nbsp;  &nbsp; text_input = st.text_input(label='Enter your name')</b></code>
                        <br />
                        <code><b>&nbsp;  &nbsp;  submit_button = st.form_submit_button(label='Submit')</b></code>
                    </Paper>
                </div>
                <br/>
                <div className={classes.paper} style={{ marginLeft: 25 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b># Alternative syntax, declare a form and use the returned object</b></code>
                        <br />
                        <code><b>with st.form(key='my_form'):</b></code>
                        <br />
                        <code><b>&nbsp;  &nbsp;form.text_input(label='Enter some text')</b></code>
                        <br />
                        <code><b>&nbsp;  &nbsp;submit_button = form.form_submit_button(label='Submit')</b></code>
                    </Paper>
                </div>
                <br />
                <div className={classes.paper} style={{ marginLeft: 25 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b># st.form_submit_button returns True upon form submit</b></code>
                        <br />
                        <code><b>if submit_button:</b></code>
                        <br />
                        <code><b> &nbsp;  &nbsp; st.write(f'hello')</b></code>
                    </Paper>
                </div>
                <Typography className={classes.para} variant="subtitle1" style={{ marginTop: 10 }}>Forms can appear anywhere in your app (sidebar, columns etc), but there are some &nbsp; <b>constraints</b></Typography>
                <List>
                    <ListItem>
                        <ListItemText>1. A form cannot have interdependent widgets, i.e. the output of widget1 cannot be the input to widget2 inside a form.</ListItemText>
                    </ListItem>
                    <Box display="flex" flexDirection="row" ml={3} mt={-5}>
                        <Box p={4}>
                            <Badge color="secondary" badgeContent={'widget'} />
                        </Box>
                        <Box p={4}>
                            <Badge color="error" badgeContent={'widget2'} />
                        </Box>
                    </Box>
                    <ListItem>
                        <ListItemText>2. By design, interacting with widgets inside st.form does not trigger a re-run. Because of this reason, st.button cannot be declared inside st.form.</ListItemText>
                    </ListItem>
                    <Box display="flex" flexDirection="row" ml={3} mt={-5}>
                        <Box p={4}>
                            <Badge color="secondary" badgeContent={'st.form'} />
                        </Box>
                        <Box p={4}>
                            <Badge color="primary" badgeContent={'st.button'} />
                        </Box>
                    </Box>
                    <ListItem>
                        <ListItemText>3. st.form cannot be embedded inside another st.form</ListItemText>
                    </ListItem>
                    <Box display="flex" flexDirection="row" ml={3} mt={-5}>
                        <Box p={4}>
                            <Badge color="secondary" badgeContent={'st.form'} />
                        </Box>
                    </Box>
                    <ListItem>
                        <ListItemText>4. Forms must have an associated st.form_submit_button. Clicking this button triggers a re-run. Streamlit throws an error if a form does not have an associated st.form_submit_button</ListItemText>
                    </ListItem>
                    <Box display="flex" flexDirection="row" ml={6} mt={-5}>
                        <Box p={5}>
                            <Badge color="primary" badgeContent={'st.form_submit_button'} />
                        </Box>
                    </Box>
                </List>
            </div>
        </>
    )
}


export const Functions = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Heading>Adding Functionality</Heading>
                <SubHeading>Insert elements out of order</SubHeading>
                <Typography className={classes.para} variant="subtitle1">You can use the &nbsp; <ChipTitle label=" st.empty" /> &nbsp; method as a placeholder, to “save” a slot in your app that you can use later.</Typography>
                <div className={classes.paper} style={{ margin: 15 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b>st.text('This will appear first')</b></code>
                        <br />
                        <br />
                        <code><b># Appends some text to the app.</b></code>
                        <br />
                        <code><b>my_slot1 = st.empty()</b></code>
                        <br />
                        <br />
                        <code><b># Appends an empty slot to the app. We'll use this later.</b></code>
                        <br />
                        <code><b>my_slot2 = st.empty()</b></code>
                        <br />
                        <br />
                        <code><b># Appends another empty slot.</b></code>
                        <br />
                        <code><b>st.text('This will appear last')</b></code>
                        <br />
                        <br />
                        <code><b># Appends some more text to the app.</b></code>
                        <br />
                        <code><b>my_slot1.text('This will appear second')</b></code>
                        <br />
                        <br />
                        <code><b>my_slot2.line_chart(np.random.randn(20, 2))</b></code>
                        <br />
                        <code><b># Replaces the second empty slot with a chart.</b></code>
                    </Paper>
                </div>
                <SubHeading>Animate elements</SubHeading>
                <Typography className={classes.para} variant="subtitle1">Let’s combine some of the things you’ve learned to create compelling animations in your app.</Typography>
                <div className={classes.paper} style={{ margin: 15 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b>progress_bar = st.progress(0)
                        <br/>
                        status_text = st.empty()
                        <br />
                        chart = st.line_chart(np.random.randn(10, 2))</b></code>
                        <br />
                        <br />
                        <code><b>for i in range(100):</b></code>
                        <br />
                        <code><b> &nbsp; &nbsp; # Update progress bar.</b></code>
                        <br />
                        <code><b> &nbsp; &nbsp; progress_bar.progress(i + 1)</b></code>
                        <br />
                        <code><b> &nbsp; &nbsp; new_rows = np.random.randn(10, 2)</b></code>
                        <br />
                        <br />
                        <code><b>&nbsp; &nbsp;# Update status text..</b></code>
                        <br/>
                        <code><b>&nbsp; &nbsp;status_text.text('The latest random number is: %s' % new_rows[-1, 1])</b></code>
                        <br />
                        <br />
                        <code><b>&nbsp; &nbsp;# Append data to the chart.</b></code>
                        <br/>
                        <code><b>&nbsp; &nbsp;chart.add_rows(new_rows)</b></code>
                        <br />
                        <br />
                        <code><b>&nbsp; &nbsp;# Pretend we're doing some computation that takes time.</b></code>
                        <br/>
                        <code><b>&nbsp; &nbsp;time.sleep(0.1)</b></code>
                        <br />
                        <br />
                        <code><b>status_text.text('Done!')</b></code>
                        <br/>
                        <code><b>st.balloons()</b></code>
                    </Paper>
                </div>
                <SubHeading>Append data to a table or chart</SubHeading>
                <Typography className={classes.para} variant="subtitle1">In Streamlit, you can not only replace entire elements in your app, but also modify the 
                <br/>
                data behind those elements. Here is how:</Typography>
                <div className={classes.paper} style={{ margin: 15 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code><b>import numpy as np </b></code>
                        <br />
                        <code><b>import time</b></code>
                        <br />
                        <br />
                        <code><b># Get some data.</b></code>
                        <br />
                        <code><b>data = np.random.randn(10, 2)</b></code>
                        <br />
                        <br />
                        <code><b># Show the data as a chart.</b></code>
                        <br />
                        <code><b>chart = st.line_chart(data)</b></code>
                        <br />
                        <br />
                        <code><b># Wait 1 second, so the change is clearer.</b></code>
                        <br />
                        <code><b>time.sleep(1)</b></code>
                        <br />
                        <br />
                        <code><b># Grab some more data.</b></code>
                        <br />
                        <code><b>data2 = np.random.randn(10, 2)</b></code>
                        <br />
                        <br />
                        <code><b># Append the new data to the existing chart.</b></code>
                        <br />
                        <code><b>chart.add_rows(data2)</b></code>
                    </Paper>
                </div>
            </div>
        </>
    )
}

