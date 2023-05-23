import axios from "axios";
import {Post} from "@models";
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const postsService = {
    async getPosts(page: number, limit?: number) {
        await delay(1000);
        return await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit || 10,
                _page: page
            }
        })
    },

    async getCommentsByPostId(id: number) {
        await delay(1000);
        return await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    }
}
