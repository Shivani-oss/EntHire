import React from 'react'
import { Typography, ListItem, List, ListItemText, Paper, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Heading from '../../components/Heading'
import SubHeading from '../../components/SubHeading'
import ChipTitle from '../../components/ChipTtile'


export default {
    title: 'Tutorials/Getting Started/Magic',
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
        margin: 5
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(2),
    },
}))




export const Uses = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Heading>Use magic</Heading>
                <Typography className={classes.para} variant="subtitle1">You can also write to your app without calling any Streamlit methods. Streamlit</Typography>
                <Typography className={classes.para} variant="subtitle1">supports  &nbsp; <Link href="#" style={{ textDecoration: 'none' }}>“magic commands,”</Link> &nbsp;  which means you don’t have to use &nbsp; <ChipTitle label="st.write()" /> &nbsp; at all! Try</Typography>
                <Typography className={classes.para} variant="subtitle1">replacing the code above with this snippet:</Typography>
                <div className={classes.paper} style={{ margin: 10 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code>
                            """
                            # My first app
                            Here's our first attempt at using data to create a table:
                            """
                        </code>
                        <br />
                        <code>
                            <b>df = pd.DataFrame({'{'}
                            'first column': [1, 2, 3, 4],
                            'second column': [10, 20, 30, 40]
                            {'}'})
                            </b>
                        </code>
                        <br />
                        <code><b>df</b></code>
                    </Paper>
                </div>
                <Typography className={classes.para} variant="subtitle1">Any time that Streamlit sees a variable or a literal value on its own line, it automatically</Typography>
                <Typography className={classes.para} variant="subtitle1">writes that to your app using &nbsp; <ChipTitle label="st.write()" /> .&nbsp; For more information, refer to the</Typography>
                <Typography className={classes.para} variant="subtitle1">documentation on &nbsp; <Link href="#" style={{ textDecoration: 'none' }}>magic commands.</Link> &nbsp;</Typography>
            </div>
        </>
    )
}

export const Draw  = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Heading>Draw charts and maps</Heading>
                <Typography className={classes.para} variant="subtitle1">Streamlit supports several popular data charting libraries like &nbsp; <Link href="#" style={{ textDecoration: 'none' }}> Matplotlib, Altair,</Link> &nbsp;</Typography>
                <Typography className={classes.para} variant="subtitle1"><Link href="#" style={{ textDecoration: 'none' }}> deck.gl, and more.</Link> &nbsp; In this section, you’ll add a bar chart, line chart, and a map to your app.</Typography>
                <SubHeading>Draw a line chart</SubHeading>
                <Typography className={classes.para} variant="subtitle1">You can easily add a line chart to your app with &nbsp; <ChipTitle label="st.line_chart()" />.&nbsp;  We’ll generate a</Typography>
                <Typography className={classes.para} variant="subtitle1">random sample using Numpy and then chart it.</Typography>
                <div className={classes.paper} style={{ margin: 15 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code>
                            <b>chart_data = pd.DataFrame(
                            np.random.randn(20, 3),
                            columns=['a', 'b', 'c'])
                            
                            </b>
                        </code>
                        <br />
                        <code><b>st.line_chart(chart_data)</b></code>
                    </Paper>
                </div>
                <SubHeading>Plot a map</SubHeading>
                <Typography className={classes.para} variant="subtitle1">With &nbsp; <ChipTitle label="st.map()" />&nbsp;  you can display data points on a map. Let’s use Numpy to generate </Typography>
                <Typography className={classes.para} variant="subtitle1">some sample data and plot it on a map of San Francisco.</Typography>
                <Typography className={classes.para} variant="subtitle1">random sample using Numpy and then chart it.</Typography>
                <div className={classes.paper} style={{ margin: 15 }}>
                    <Paper elevation={1} style={{ backgroundColor: '#e3f2fd', padding: 10 }}>
                        <code>
                            <b>
                                map_data = pd.DataFrame(
                                np.random.randn(1000, 2) / [50, 50] + [37.76, -122.4],
                                columns=['lat', 'lon'])
                            </b>
                        </code>
                        <br />
                        <code><b>st.map(map_data)</b></code>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export const Share = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Heading>Share your app</Heading>
                <Typography className={classes.para} variant="subtitle1">After you’ve built a Streamlit app, it’s time to share it! To show it off to the world you</Typography>
                <Typography className={classes.para} variant="subtitle1">can use &nbsp; <b>Streamlit sharing</b> &nbsp; to deploy, manage, and share your app for free. Streamlit</Typography>
                <Typography className={classes.para} variant="subtitle1">sharing is  &nbsp; <Link href="#" style={{ textDecoration: 'none' }}> currently invitation</Link> &nbsp; only, so please request an invite and we’ll get you one soon!</Typography>
                <Typography className={classes.para} variant="subtitle1">It works in 3 simple steps:</Typography>
                <List>
                    <ListItem>
                        <ListItemText>1. Put your app in a public Github repo (and make sure it has a requirements.txt!) </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>2. Sign into &nbsp; <Link href="#" style={{ textDecoration: 'none' }}>share.streamlit.io</Link> &nbsp;  </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>3. Click ‘Deploy an app’ and then paste in your GitHub URL</ListItemText>
                    </ListItem>
                </List>
                <Typography className={classes.para} variant="subtitle1">That’s it! 🎈You now have a publicly deployed app that you can share with the world.</Typography>
                <Typography className={classes.para} variant="subtitle1">Click to learn more about how to &nbsp; <Link href="#" style={{ textDecoration: 'none' }}> use Streamlit sharing.</Link> &nbsp;  If you’re looking for private</Typography>
                <Typography className={classes.para} variant="subtitle1">sharing for your team, check out &nbsp; <Link href="#" style={{ textDecoration: 'none' }}> Streamlit for Teams.</Link> &nbsp; </Typography>
            </div>
        </>
    )
}
