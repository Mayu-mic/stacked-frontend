import { StackedService } from './StackedService';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { List } from '../models/List';
import { ListStatus } from '../models/ListStatus';

@Injectable()
export class StackedListService extends StackedService {

    getLists(): Observable<List[]> {
        const url = `lists`;
        return this.get<List[]>(url);
    }

    postList(name: string, status: ListStatus): Observable<List> {
        const url = `lists`;
        return this.post<List>(url, {
            name,
            status
        });
    }

    updateList(listId: number, name: string, status: ListStatus): Observable<List> {
        const url = `lists/${listId}`;
        return this.patch<List>(url, {
            name,
            status
        });
    }
}
