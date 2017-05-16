import { List } from './List';
import { StackStatus } from './StackStatus';
import { User } from './User';
import { Comment } from './Comment';

export interface Stack {
    id: number;
    list: List;
    title: string;
    note: string;
    comments: Comment[];
    status: StackStatus;
    star_count: number;
    comment_count: number;
    created_by: User;
    createdAt: String;
    updatedAt: String;
}
