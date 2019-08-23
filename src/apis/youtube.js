import axios from 'axios';

const KEY = 'AIzaSyBMgkw1VJfRZ50CJv-ccPYVeD50XSvmVBY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});