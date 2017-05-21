import { List } from './List';
import { StackStatus } from './StackStatus';
import { User } from './User';
import { Comment } from './Comment';

export interface Stack {
    id: number;
    list: List;
    title: string;
    note: string;
    liked?: boolean;
    comments: Comment[];
    status: StackStatus;
    like_count: number;
    comment_count: number;
    created_by: User;
    createdAt: String;
    updatedAt: String;
}
