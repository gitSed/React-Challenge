import React, { useState, useEffect } from 'react';

import * as Repository from './repository';

const PostSearch = next => {
    const [posts, setPosts] = useState([]);
    const [after, setAfter] = useState('');

    let cancel;
    useEffect(() => {

        Repository.searchRedditPosts(next, cancel)
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

        return () => cancel();

    }, [next]);

    return { posts, after };
}

export default PostSearch;