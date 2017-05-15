import { Item } from './Item';
import { ListStatus } from './ListStatus';
import { User } from './User';

export interface List {
    id: number;
    items: Item[];
    name: string;
    order: number;
    status: ListStatus;
    created_by: User;
    created_at: String;
    updated_at: String;
}
