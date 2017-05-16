import { User } from './User';
import { Stack } from './Stack';

export interface Comment {
    stack: Stack;
    body: string;
    stars_count: number;
    created_by: User;
    created_at: string;
    updated_at: string;
}
