import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Injectable()
export abstract class StackedService {

    constructor(protected tokenService: Angular2TokenService) {}

    protected get<T>(url: string): Observable<T> {
        return this.tokenService.get(url)
            .map(res => res.json() as T)
            .catch(this.handleError)
            ;
    }

    protected post<T>(url: string, body: any): Observable<T> {
        return this.tokenService.post(url, body)
            .map(res => res.json() as T)
            .catch(this.handleError);
    }

    protected patch<T>(url: string, body: any): Observable<T> {
        return this.tokenService.patch(url, body)
            .map(res => res.json() as T)
            .catch(this.handleError);
    }

    protected delete<T>(url: string): Observable<T> {
        return this.tokenService.delete(url)
            .map(res => res.json() as T)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.json().error || 'error');
    }

    private encodeData(data: Object) {
        return Object.keys(data).map(key => {
            return [key, data[key]].map(encodeURIComponent).join('=');
        }).join('&');
    }
}
