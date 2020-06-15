import { useState, useEffect } from 'react';

import * as Repository from './repository';

const PostSearch = next => {
    const [posts, setPosts] = useState([]);
    const [after, setAfter] = useState('');

    let token = { canceler: null };
    useEffect(() => {

        Repository.searchRedditPosts(next, token)
        .then(resp => {
            if(resp.data){
                let {data} = resp.data;

                setPosts(prevPost => [
                    ...prevPost,
                    ...data.children.map(({data}) => ({
                        id: data.id,
                        title: data.title,
                        author: data.author,
                        thumbnailSrc: data.thumbnail.includes('http') ? data.thumbnail : null,
                        createdHours: Math.ceil(Math.abs(new Date() - new Date(data.created)) / 36e5),
                        num_comments: data.num_comments
                    }))
                ]);

                setAfter(data.after);
            }
            
        })
        .catch(err => console.log('err: ', err.message));

        return () => token.canceler();

    }, [next]);

    return { posts, after };
}

export default PostSearch;