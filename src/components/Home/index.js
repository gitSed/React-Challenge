import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      }
    }
}));


const Home = props => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            Esté es el Home
        </div>
    );
}

export default Home;