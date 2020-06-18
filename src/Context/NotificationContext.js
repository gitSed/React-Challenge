import React, { createContext, useState, useEffect } from 'react';

import { makeStyles, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

export const NotificationContext = createContext();

function Alert(props){
    return (<MuiAlert elevation={6} variant="filled" {...props} />)
}

const useStyles = makeStyles(theme => ({
    root: {
        width: 'auto',
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    },
    filledSuccess: {
        backgroundColor: theme.palette.success.main,
        fontWeight: 'bold'
    }
}));

const NotificationProvider = props => {
    const classes = useStyles();
    
    const [open, setOpen] = useState(false);
    const [notification, showNotification] = useState({
        message: '',
        type: 'success',
        delay: 1
    });

    useEffect(() => {
        setOpen(!0);
    }, [notification]);

    const handleClose = (event, reason) => {
        if(reason === 'clickaway')
            return;

        setOpen(!1)
    }

    return(
        <NotificationContext.Provider
            value={{showNotification}}
        >
            {props.children}
            <Snackbar
                open={open}
                autoHideDuration={notification.delay || 5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                classes={{
                    root: classes.root
                }}
            >
                <Alert
                    onClose={handleClose}
                    severity={notification.type}
                    closeText={'Cerrar'}
                    classes={{
                        filledSuccess: classes.filledSuccess
                    }}
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    )
}

export default NotificationProvider;