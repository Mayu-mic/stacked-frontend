import { Router } from '@angular/router';
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

    @Effect({dispatch: false})
    login$ = this.action$
        .ofType(fromUser.REQUEST_LOGIN)
        .do(_ => this.userService.login(this.router.url))
        ;

    @Effect({dispatch: false})
    logout$: Observable<any> = this.action$
        .ofType(fromUser.REQUEST_LOGOUT)
        .do(_ => this.userService.logout())
        ;

    @Effect()
    setUserInfo$: Observable<Action> = this.action$
        .ofType(fromUser.REQUEST_USER_INFO)
        .delay(10)
        .filter(_ => this.tokenService.userSignedIn())
        .switchMap(
            _ => this.tokenService.validateToken()
                .map(_ => this.tokenService.currentUserData)
                .map(user => new fromUser.RequestUserInfoSuccessAction(user))
                .catch(_ => {
                    this.tokenService.signOut();
                    return of(new fromUser.RequestUserInfoFailAction());
                })
        );

    private userService: StackedUserService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService, private router: Router) {
        this.userService = new StackedUserService(tokenService);
    }
}
