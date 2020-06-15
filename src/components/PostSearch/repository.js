import Axios from 'axios';

const url = 'https://www.reddit.com/r/all/top/.json?t=all&limit=10';


const searchRedditPosts = async (next, cancel) => {

    let afterParam = next ? `&after=${next}` : '';

    return await Axios.get(`${url}${afterParam}`, { cancelToken: new Axios.CancelToken(c => cancel = c) })
    .then(resp => {
        if(resp.status === 200){
            return Promise.resolve({ data: resp.data });
        }
    })
    .catch(err => {
        if(Axios.isCancel(err)) {
            return Promise.resolve({ data: null });
        }

        return Promise.reject({ message: 'There is a problem with the page. Please refresh.' });
    });
}


export {
    searchRedditPosts
}