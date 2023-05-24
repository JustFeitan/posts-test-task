import axios, {AxiosResponse} from "axios";
import {Post, QueryParams} from "@models";

const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));
export const postsService = {
    async getPosts(page: number, limit?: number) {
        await delay();
        return await axios.get<AxiosResponse<Post[]>>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit || 10,
                _page: page
            }
        })
    },

    async getCommentsByPostId(id: number) {
        await delay();
        return await axios.get<AxiosResponse<Comment[]>>('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    },
    async getUserPostsByUserId(userId: number, queryParams?: QueryParams) {
        await delay();
        return await axios.get<AxiosResponse<Post[]>>('https://jsonplaceholder.typicode.com/posts?', {
            params: {
                userId: userId,
                _limit: queryParams?.limit | 10,
                _page: queryParams?.page | 1
            }
        })
    },
}
