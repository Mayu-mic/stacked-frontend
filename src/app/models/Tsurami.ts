import { Status } from './Status';
export interface Tsurami {
    id: number;
    title: string;
    body: string;
    sorena: number;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}
