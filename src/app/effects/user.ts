import { of } from 'rxjs/observable/of';
import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { RequestLoginAction, RequestLogoutAction, RequestUserInfoAction } from '../actions/user';
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
                .map(_ => new user.RequestLoginSuccessAction())
        );

    @Effect()
    logout$: Observable<any> = this.action$
        .ofType(user.REQUEST_LOGOUT)
        .switchMap((action: RequestLogoutAction) =>
            this.userService.logout()
                .map(_ => new user.RequestLogoutSuccessAction())
        );

    @Effect()
    setUserInfo$: Observable<any> = this.action$
        .ofType(user.REQUEST_USER_INFO)
        .do(_ => this.tokenService.processOAuthCallback())
        .filter(_ => !!this.tokenService.currentAuthData)
        .switchMap((action: RequestUserInfoAction) =>
            this.tokenService.validateToken()
                .map(_ => new user.RequestUserInfoSuccessAction(this.tokenService.currentUserData))
                .catch(_ => of(new user.RequestUserInfoFailAction()))
        );

    private userService: StackedUserService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.userService = new StackedUserService(tokenService);
    }
}
