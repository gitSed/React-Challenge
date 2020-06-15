import React, { useState, useEffect, useRef, useCallback } from 'react';

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

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
}


const ListCard = props => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [after, setAfter] = useState(null);
    
    let elemRef = useRef();

    let result = PostSearch(after);

    useEffect(() => {
        setPosts(result.posts);

        observer.observe(elemRef.current);
    }, [result.posts]);

    useEffect(() => {
        setAfter(result.after);

        observer.observe(elemRef.current);
    }, [result.after]);

    const intersectionFn = entries => {
        console.log('after', after);
    }

    let observer = new IntersectionObserver(intersectionFn, observerOptions);

    return(
        <div className={classes.root} ref={elemRef}>
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