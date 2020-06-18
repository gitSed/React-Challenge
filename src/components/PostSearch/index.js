import { useState, useEffect, useContext } from 'react';

/* Context */
import { PostContext } from '../../Context/PostsContext';

/* Own Components */
import * as Repository from './repository';

const PostSearch = next => {
    const [after, setAfter] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {addPostItem} = useContext(PostContext);

    const getEndPoint = () => {
        /*--Some Logic--
            ...
            return  Repository.getEndPoint(after); Get Corresponding Endpoint
        */

        return require('../../config').REDDIT_ENDPOINT; // Returns from this function, only for example purposes.
    }

    let token = { canceler: null };
    useEffect(() => {
        setIsLoading(!0);
        let endpoint = getEndPoint();

        Repository.searchRedditPosts(next, token, endpoint)
        .then(resp => {
            if(resp.data){
                let {data} = resp.data;

                [...data.children].forEach(({data}) => {
                    addPostItem({
                        id: data.id,
                        title: data.title,
                        author: data.author,
                        thumbnailSrc: data.thumbnail.includes('http') ? data.thumbnail : null,
                        createdHours: Math.ceil(Math.abs(new Date() - new Date(data.created)) / 36e5),
                        num_comments: data.num_comments
                    });
                });

                setAfter(data.after);
            }
            
            setIsLoading(!1);
        })
        .catch(err => console.log('err: ', err.message));

        return () => token.canceler();

    }, [next]);

    return { after, isLoading };
}

export default PostSearch;