import axios from axios;

const url = 'http://localhost:3000/api/posts';

class PostService {
    //get posts. Static means you don't have to instantiate new posts everytime????
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch (err) {
                reject(err);
            }
        })
    }

    //Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }
}