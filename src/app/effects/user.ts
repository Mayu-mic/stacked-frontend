import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { StackedUserService } from '../services/StackedUserService';
import { Angular2TokenService } from 'angular2-token';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import * as fromUser from '../actions/user';

@Injectable()
export class UserEffects {

    @Effect()
    login$: Observable<Action> = this.action$
        .ofType(fromUser.REQUEST_LOGIN)
        .switchMap((action: fromUser.RequestLoginAction) =>
            this.userService.login()
                .map(_ => new fromUser.RequestLoginSuccessAction())
                .catch(_ => of(new fromUser.RequestLoginFailAction()))
        );

    @Effect()
    logout$: Observable<any> = this.action$
        .ofType(fromUser.REQUEST_LOGOUT)
        .switchMap((action: fromUser.RequestLogoutAction) =>
            this.userService.logout()
                .map(_ => new fromUser.RequestLogoutSuccessAction())
                .catch(_ => of(new fromUser.RequestLogoutFailAction()))
        );

    @Effect()
    setUserInfo$: Observable<Action> = this.action$
        .ofType(fromUser.REQUEST_USER_INFO)
        .filter(_ => this.tokenService.userSignedIn())
        .switchMap((action: fromUser.RequestUserInfoAction) =>
            this.tokenService.validateToken()
                .map(_ => new fromUser.RequestUserInfoSuccessAction(this.tokenService.currentUserData))
                .catch(_ => of(new fromUser.RequestUserInfoFailAction()))
        );

    private userService: StackedUserService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.userService = new StackedUserService(tokenService);
    }
}
