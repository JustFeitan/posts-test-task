import axios, {AxiosResponse} from "axios";
import {Post, QueryParams} from "@models";

const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));
export const postsService = {
    async getPosts(queryParams?: QueryParams) {
        await delay();
        return await axios.get<AxiosResponse<Post[]>>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: queryParams?.limit || 10,
                _page: queryParams.page,
                _sort: queryParams?.sort,
                _order: queryParams?.order
            }
        })
    },

    async getPostsByTitleSearch(queryParams?: QueryParams) {
        await delay();
        return await axios.get<AxiosResponse<Post[]>>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                title_like: queryParams?.like || null,
                _limit: queryParams?.limit || 10,
                _page: queryParams?.page || 1,
                _sort: queryParams?.sort,
                _order: queryParams?.order,

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
                title_like: queryParams?.like || null,
                userId: userId,
                _limit: queryParams?.limit || 10,
                _page: queryParams?.page || 1,
                _sort: queryParams?.sort,
                _order: queryParams?.order,
            }
        })
    },
}
