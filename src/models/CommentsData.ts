import { Comment } from "@models/Comment";

export interface CommentsData {
    postId: number;
    comments: Comment[];
    isLoading: boolean;
    error: string;
}
