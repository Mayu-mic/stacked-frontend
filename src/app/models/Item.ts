import { List } from './List';
import { ItemStatus } from './ItemStatus';
import { User } from './User';
import { Comment } from './Comment';

export interface Item {
    id: number;
    list: List;
    title: string;
    note: string;
    comments: Comment[];
    status: ItemStatus;
    created_by: User;
    createdAt: String;
    updatedAt: String;
}
