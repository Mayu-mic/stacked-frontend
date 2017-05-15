import { ItemStatus } from '../models/ItemStatus';
import { ListStatus } from '../models/ListStatus';
import { Angular2TokenService } from 'angular2-token';
import { List } from '../models/List';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

export const DEFAULT_GET_LIMIT = 30;

@Injectable()
export class StackedItemService {
    constructor(private tokenService: Angular2TokenService) {
        this.tokenService.init({
            apiBase: 'http://localhost:3000',
            oAuthPaths: {
                slack: 'auth/slack'
            },
        });
    }


    /**
     * Lists
     */

    getLists(): Observable<List[]> {
        const url = `/lists`;
        return this.get<List[]>(url);
    }

    postList(name: string, status: ListStatus): Observable<List> {
        const url = `/lists`;
        return this.post<List>(url, {
            name,
            status
        });
    }

    updateList(listId: number, name: string, status: ListStatus): Observable<List> {
        const url = `/lists/${listId}`;
        return this.patch<List>(url, {
            name,
            status
        });
    }


    /**
     * Items
     */

    getItems(listId: number): Observable<Item[]> {
        const url = `/lists/${listId}/items`;
        return this.get<Item[]>(url);
    }

    getItem(itemId: number): Observable<Item> {
        const url = `/items/${itemId}`;
        return this.get<Item>(url);
    }

    postItem(listId: number, title: string, note: string, status: ItemStatus): Observable<Item> {
        const url = `/lists/${listId}/items`;
        return this.post<Item>(url, {
            title,
            note,
            status
        });
    }

    updateItem(itemId: number, title: string, note: string, status: ItemStatus): Observable<Item> {
        const url = `/items/${itemId}`;
        return this.patch<Item>(url, {
            title,
            note,
            status,
        });
    }

    deleteItem(itemId: number): Observable<Item> {
        const url = `/items/${itemId}`;
        return this.delete(url);
    }

    addStarToItem(itemId: number): Observable<Item> {
        const url = `/items/${itemId}/star`;
        return this.post<Item>(url, {});
    }

    removeStarFromItem(itemId: number): Observable<Item> {
        const url = `/items/${itemId}/star`;
        return this.delete<Item>(url);
    }


    /**
     * Comments
     */

    getComments(itemId: number): Observable<Comment[]> {
        const url = `/items/${itemId}/comments`;
        return this.get<Comment[]>(url);
    }

    postComment(itemId: number, body: string): Observable<Comment> {
        const url = `/items/${itemId}/comments`;
        return this.post<Comment>(url, {
            body
        });
    }

    deleteComment(commentId: number): Observable<Comment> {
        const url = `/comments/${commentId}`;
        return this.delete<Comment>(url);
    }

    addStarToComment(commentId: number): Observable<Comment> {
        const url = `/comments/${commentId}/star`;
        return this.post<Comment>(url, {});
    }

    removeStarFromComment(commentId: number): Observable<Comment> {
        const url = `/comments/${commentId}/star`;
        return this.delete<Comment>(url);
    }


    /**
     * private methods
     */

    private get<T>(url: string): Observable<T> {
        return this.tokenService.get(url)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    private post<T>(url: string, body: any): Observable<T> {
        return this.tokenService.post(url, body)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    private patch<T>(url: string, body: any): Observable<T> {
        return this.tokenService.patch(url, body)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    private delete<T>(url: string): Observable<T> {
        return this.tokenService.delete(url)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    // fetch(option: IFetchOption = defaultOption): Observable<Item[]> {
    //     const opt = { ...defaultOption, ...option };
    //     const params = this.generateFetchParams(opt);
    //     const url = `${this.apiBase}/item?${params}`;
    //     return this.http.get(url)
    //         .map(res => res.json() as Tsurami[])
    //         .catch(this.handleError)
    //         ;
    // }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.json().error || 'error');
    }

    private encodeData(data: Object) {
        return Object.keys(data).map(key => {
            return [key, data[key]].map(encodeURIComponent).join('=');
        }).join('&');
    }
}
