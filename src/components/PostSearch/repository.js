import Axios from 'axios';

const searchRedditPosts = async (next, token, endpoint) => {

    let afterParam = (next && next !== '') ? `&after=${next}` : '';

    return await Axios.get(`${endpoint}${afterParam}`, { cancelToken: new Axios.CancelToken(c => token.canceler = c) })
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