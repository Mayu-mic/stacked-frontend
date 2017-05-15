import { User } from '../models/User';
import { Action } from '@ngrx/store';

export const REQUEST_LOGIN = '[User] Login';
export const REQUEST_LOGIN_SUCCESS = '[User] Login Success';
export const REQUEST_LOGOUT = '[User] Logout';
export const REQUEST_LOGOUT_SUCCESS = '[User] Logout Success';
export const REQUEST_USER_INFO = '[User] Request User Info';
export const REQUEST_USER_INFO_SUCCESS = '[User] Request User Info Success';

export class RequestLoginAction implements Action {
    readonly type = REQUEST_LOGIN;
}

export class RequestLoginSuccessAction implements Action {
    readonly type = REQUEST_LOGIN_SUCCESS;
}

export class RequestLogoutAction implements Action {
    readonly type = REQUEST_LOGOUT;
}

export class RequestLogoutSuccessAction implements Action {
    readonly type = REQUEST_LOGOUT_SUCCESS;
}

export class RequestUserInfoAction implements Action {
    readonly type = REQUEST_USER_INFO;
}

export class RequestUserInfoSuccessAction implements Action {
    readonly type = REQUEST_USER_INFO_SUCCESS;
    constructor(public payload: User) {}
}

export type Actions
    = RequestLoginAction
    | RequestLoginSuccessAction
    | RequestLogoutAction
    | RequestLogoutSuccessAction
    | RequestUserInfoAction
    | RequestUserInfoSuccessAction
    ;
