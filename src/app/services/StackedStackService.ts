import { StacksFilter } from '../models/StacksFilter';
import { Stack } from '../models/Stack';
import { StackedService } from './StackedService';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { StackStatus } from '../models/StackStatus';

@Injectable()
export class StackedStackService extends StackedService {

    getStacks(listId: number, filter?: StacksFilter): Observable<Stack[]> {
        const url = filter ? `lists/${listId}/stacks?filter=${filter}` : `lists/${listId}/stacks`;
        return this.get<Stack[]>(url);
    }

    getStack(stackId: number): Observable<Stack> {
        const url = `stacks/${stackId}`;
        return this.get<Stack>(url);
    }

    addStack(listId: number, title: string, note: string = ''): Observable<Stack> {
        const url = `lists/${listId}/stacks`;
        return this.post<Stack>(url, {
            stack: {
                list_id: listId,
                title,
                note
            }
        });
    }

    updateStack(stackId: number, title: string, note: string): Observable<Stack> {
        const url = `stacks/${stackId}`;
        return this.patch<Stack>(url, {
            stack: {
                title,
                note,
            }
        });
    }

    changeStackStatus(stackId: number, status: StackStatus): Observable<Stack> {
        const url = `stacks/${stackId}/status`;
        return this.patch<Stack>(url, {
            stack: {
                status
            }
        });
    }

    deleteStack(stackId: number): Observable<any> {
        const url = `stacks/${stackId}`;
        return this.delete<any>(url);
    }

    addLike(stackId: number): Observable<Stack> {
        const url = `stacks/${stackId}/like`;
        return this.post<Stack>(url, {
            stack_like: {
                stack_id: stackId
            }
        });
    }

    removeLike(stackId: number): Observable<Stack> {
        const url = `stacks/${stackId}/like`;
        return this.delete<Stack>(url);
    }
}
