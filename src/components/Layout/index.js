import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: theme.spacing(5)
    },
    layout: {
        fontSize: '12px',
        width: 'auto',
        margin: theme.spacing(9,4,1,4)
    }
}));


const Layout = props => {
    const classes = useStyles();

    return(
        <Fragment>
            <main className={classes.layout}>
                <Paper className={classes.root} elevation={2}>
                    {props.children}
                </Paper>
            </main>
        </Fragment>
    );
}

export default Layout;