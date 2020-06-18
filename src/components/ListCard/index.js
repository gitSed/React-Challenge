import React, { useState, useRef, useCallback, useContext, useEffect } from 'react';

/* Third party components */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/* Own Components */
import CardItem from '../CardItem';
import PostSearch from '../PostSearch/index';

/* Context */
import { PostContext } from '../../Context/PostsContext';


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
    threshold: 0
}


const ListCard = props => {
    const classes = useStyles();

    const [_after, setAfter] = useState(null);

    const { after = '', isLoading } = PostSearch(_after);
    const { posts } = useContext(PostContext);

    const observer = useRef();

    const setLastElementRef = useCallback(node => {
        if (isLoading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && (after !== '')) {
              setAfter(after);
          }
        }, observerOptions)

        if (node) observer.current.observe(node);
    }, [isLoading, after])

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    [...posts].map((post, idx) => {
                        if(posts.length === (idx + 1)){
                            return(
                                <Grid ref={setLastElementRef} className={classes.centerContent} item xs key={idx}>
                                    <CardItem
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        author={post.author}
                                        thumbnailSrc={post.thumbnailSrc}
                                        createdHours={post.createdHours}
                                        num_comments={post.num_comments}
                                        actionClick={() => {
                                        
                                        }}
                                    />
                                </Grid>
                            )
                        } else {
                            return(
                                <Grid className={classes.centerContent} item xs key={idx}>
                                    <CardItem
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        author={post.author}
                                        thumbnailSrc={post.thumbnailSrc}
                                        createdHours={post.createdHours}
                                        num_comments={post.num_comments}
                                        actionClick={() => {
                                        
                                        }}
                                    />
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </div>
    );
}

export default ListCard;