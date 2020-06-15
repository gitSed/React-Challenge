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
    const [posts, setPosts] = useState([]);
    const [after, setAfter] = useState('');

    let result = PostSearch(null);

    useEffect(() => {
        setPosts(result.posts);
        setAfter(result.after);
    }, [result]);

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    [...posts].map((post, idx) => (
                        <Grid className={classes.centerContent} item xs key={idx}>
                            <CardItem
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                thumbnailSrc={post.thumbnailSrc}
                                createdHours={post.createdHours}
                                num_comments={post.num_comments}
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