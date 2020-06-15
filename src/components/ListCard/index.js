import React, { useState, useEffect } from 'react';

/* Third party components */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/* Own Components */
import CardItem from '../CardItem';
import PostSearch from '../PostSearch/index';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    centerContent: {
        display: 'flex',
        justifyContent: 'center'
    }
}))


const ListCard = props => {
    const classes = useStyles();

    let result = PostSearch(null);

    useEffect(() => {
        console.log(result);
    }, [result]);

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((card, idx) => (
                        <Grid className={classes.centerContent} item xs key={idx}>
                            <CardItem
                                key={card}
                                title={'Reddit Media'}
                                author={'Edgar Sandoval'}
                                thumbnailSrc={null}
                                createdHours={1}
                                num_comments={23}
                                actionClick={() => {
                                
                                }}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default ListCard;