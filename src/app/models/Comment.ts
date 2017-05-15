import { User } from './User';
import { Item } from './Item';

export interface Comment {
    item: Item;
    body: string;
    stars_count: number;
    created_by: User;
    created_at: string;
    updated_at: string;
}
