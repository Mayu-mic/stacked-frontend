import { User } from './User';
import { Stack } from './Stack';

export interface Comment {
    id: number;
    stack: Stack;
    body: string;
    liked: boolean;
    stars_count: number;
    created_by: User;
    created_at: string;
    updated_at: string;
}
