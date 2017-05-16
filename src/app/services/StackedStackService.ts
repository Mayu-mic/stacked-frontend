import { Stack } from '../models/Stack';
import { StackedService } from './StackedService';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { StackStatus } from '../models/StackStatus';

@Injectable()
export class StackedStackService extends StackedService {

    getStacks(listId: number): Observable<Stack[]> {
        const url = `/lists/${listId}/stacks`;
        return this.get<Stack[]>(url);
    }

    getStack(stackId: number): Observable<Stack> {
        const url = `/stacks/${stackId}`;
        return this.get<Stack>(url);
    }

    addStack(listId: number, title: string, note: string): Observable<Stack> {
        const url = `/lists/${listId}/stacks`;
        return this.post<Stack>(url, {
            title,
            note,
            status,
        });
    }

    updateStack(stackId: number, title: string, note: string): Observable<Stack> {
        const url = `/stacks/${stackId}`;
        return this.patch<Stack>(url, {
            title,
            note,
        });
    }

    changeStackStatus(stackId: number, status: StackStatus): Observable<Stack> {
        const url = `/stacks/${stackId}`;
        return this.patch<Stack>(url, {
            status,
        });
    }

    deleteStack(stackId: number): Observable<any> {
        const url = `/stacks/${stackId}`;
        return this.delete<any>(url);
    }
}
