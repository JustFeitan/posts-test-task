import { Post } from "@models/Post";

export interface PostsBio {
    post: Post;
    comments: Comment[];
}
