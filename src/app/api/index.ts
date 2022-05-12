import postsDecoder from './decoders/posts';

const apiMap = {
    posts: {
        endpoint: "https://jsonplaceholder.typicode.com/posts",
        decoder: postsDecoder
    }
}

export default apiMap;
