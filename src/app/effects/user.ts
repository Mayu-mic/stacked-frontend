import { Injectable } from '@angular/core';
import { RequestCheckLoginAction, RequestLoginAction } from '../actions/user';
import { StackedUserService } from '../services/StackedUserService';
import { Angular2TokenService } from 'angular2-token';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import * as user from '../actions/user';

@Injectable()
export class UserEffects {

    @Effect()
    login$: Observable<any> = this.action$
        .ofType(user.REQUEST_LOGIN)
        .switchMap((action: RequestLoginAction) =>
            this.userService.login()
                .map(res => new user.RequestLoginSuccessAction(res))
        );

    @Effect()
    loginCheck$: Observable<any> = this.action$
        .ofType(user.CHECK_LOGIN)
        .switchMap((action: RequestCheckLoginAction) =>
            this.userService.check()
                .map(res => new user.RequestCheckLoginAction())
        );

    private userService: StackedUserService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.userService = new StackedUserService(tokenService);
    }
}
