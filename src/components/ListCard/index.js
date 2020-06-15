import React, { useState, useEffect, useRef } from 'react';

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
    threshold: 1.0
}


const ListCard = props => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [after, setAfter] = useState('');
    
    let elemRef = useRef();

    let result = PostSearch(null);

    useEffect(() => {
        setPosts(result.posts);
        setAfter(result.after);

        observer.observe(elemRef.current);
    }, [result]);


    const intersectionFn = () => {
        console.log('intersectionFn');
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