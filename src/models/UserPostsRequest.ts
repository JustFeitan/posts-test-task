import {QueryParams} from "@models/QueryParams";

export interface UserPostsRequest{
    userId: number;
    queryParams?: QueryParams
}
