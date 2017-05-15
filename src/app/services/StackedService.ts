import { Injectable } from '@angular/core';
import { ItemStatus } from '../models/ItemStatus';
import { ListStatus } from '../models/ListStatus';
import { Angular2TokenService } from 'angular2-token';
import { List } from '../models/List';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Item } from '../models/Item';

@Injectable()
export abstract class StackedService {

    constructor(protected tokenService: Angular2TokenService) {
        this.tokenService.init({
            apiBase: 'http://localhost:4000',
            oAuthBase: 'http://localhost:4000',
            oAuthCallbackPath: '/'
        });
    }

    /**
     * protected methods
     */

    protected get<T>(url: string): Observable<T> {
        return this.tokenService.get(url)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    protected post<T>(url: string, body: any): Observable<T> {
        return this.tokenService.post(url, body)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    protected patch<T>(url: string, body: any): Observable<T> {
        return this.tokenService.patch(url, body)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    protected delete<T>(url: string): Observable<T> {
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
