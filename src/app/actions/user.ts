import { User } from '../models/User';
import { Action } from '@ngrx/store';

export const REQUEST_LOGIN = '[User] Login';
export const REQUEST_LOGIN_SUCCESS = '[User] Login Success';

export const CHECK_LOGIN = '[User] Check Login';
export const CHECK_LOGIN_SUCCESS = '[User] Check Login Success';

export class RequestLoginAction implements Action {
    readonly type = REQUEST_LOGIN;
}

export class RequestLoginSuccessAction implements Action {
    readonly type = REQUEST_LOGIN_SUCCESS;
    constructor(public payload: User) {}
}

export class RequestCheckLoginAction implements Action {
    readonly type = CHECK_LOGIN;
}

export class RequestCheckLoginSuccessAction implements Action {
    readonly type = CHECK_LOGIN_SUCCESS;
    constructor(public payload: User) {}
}

export type Actions
    = RequestLoginAction
    | RequestLoginSuccessAction
    | RequestCheckLoginAction
    | RequestCheckLoginSuccessAction
    ;
