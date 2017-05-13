import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Order} from '../models/Order';
import { Visibility } from '../models/Visibility';
import { Tsurami } from '../models/Tsurami';
import { Status } from '../models/Status';

export const DEFAULT_GET_LIMIT = 30;

export interface IFetchOption {
    order?: Order;
    visibility?: Visibility;
    page?: number;
}

const defaultOption: IFetchOption = {
    visibility: Visibility.SHOW_ALL,
    order: Order.SORENA_DESC,
    page: 0,
};

@Injectable()
export class TsuramisService {
    private apiBase = 'http://localhost:1337';
    constructor(private http: Http) { }

    fetch(option: IFetchOption = defaultOption): Observable<Tsurami[]> {
        const opt = { ...defaultOption, ...option };
        const params = this.generateFetchParams(opt);
        const url = `${this.apiBase}/tsurami?${params}`;
        return this.http.get(url)
            .map(res => res.json() as Tsurami[])
            .catch(this.handleError)
            ;
    }

    addSorena(id: number): Observable<Tsurami> {
        const url = `${this.apiBase}/tsurami/${id}/sorena`;
        return this.http.post(url, '')
            .map(res => res.json() as Tsurami)
            .catch(this.handleError)
            ;
    }

    changeStatus(id: number, status: Status): Observable<Tsurami> {
        const url = `${this.apiBase}/tsurami/${id}`;
        return this.http.post(url, { status }, {
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .map(res => res.json() as Tsurami)
            .catch(this.handleError)
            ;
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.json().error || 'error');
    }

    private generateFetchParams(option: IFetchOption) {
        let params = {};
        switch (option.visibility) {
            case Visibility.SHOW_ACTIVE:
                params['where'] = JSON.stringify({ status: ['pending', 'in_progress'] });
                break;
            case Visibility.SHOW_RESOLVED:
                params['where'] = JSON.stringify({ status: ['resolved'] });
                break;
        }
        switch (option.order) {
            case Order.SORENA_ASC:
                params['sort'] = 'sorena ASC';
                break;
            case Order.SORENA_DESC:
                params['sort'] = 'sorena DESC';
                break;
            case Order.CREATED_AT_ASC:
                params['sort'] = 'createdAt ASC';
                break;
            case Order.CREATED_AT_DESC:
                params['sort'] = 'createdAt DESC';
                break;
        }
        if (option.page) {
            params['skip'] = this.calcSkipFromPage(option.page);
        }
        params['limit'] = DEFAULT_GET_LIMIT;
        return this.encodeData(params);
    }

    private encodeData(data: Object) {
        return Object.keys(data).map(key => {
            return [key, data[key]].map(encodeURIComponent).join('=');
        }).join('&');
    }

    private calcSkipFromPage(page:number): number {
        return (page - 1) * DEFAULT_GET_LIMIT;
    }
}
