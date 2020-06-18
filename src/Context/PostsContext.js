import React, { createContext, useState, useEffect } from 'react';

import _ from 'underscore';

export const PostContext = createContext();

const PostProvider = props => {
    const [posts, setPosts] = useState([]);

    const removePostItem = postKey => {
        setPosts([..._.without(posts, _.findWhere(posts, {
            id: postKey
        }))]);
    }
    
    const addPostItem = post => {
        setPosts(prevPost => [...prevPost, {...post}])
    }

    return(
        <PostContext.Provider
            value={{
                removePostItem,
                addPostItem,
                posts
            }}
        >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostProvider;