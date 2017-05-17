import { StackEditFormValue } from '../components/StackEditForm.component';
import { Stack } from '../models/Stack';
import { Action } from '@ngrx/store';

export const REQUEST_STACK = '[Stack] Request';
export const REQUEST_STACK_SUCCESS = '[Stack] Request Success';
export const REQUEST_STACK_FAIL = '[Stack] Request Fail';

export const UPDATE_STACK = '[Stack] Update';
export const UPDATE_STACK_SUCCESS = '[Stack] Update Success';
export const UPDATE_STACK_FAIL = '[Stack] Update Fail';

export const ADD_LIKE = '[Stacks] Add Like';
export const ADD_LIKE_SUCCESS = '[Stacks] Add Like Success';
export const ADD_LIKE_FAIL = '[Stacks] Add Like Fail';

export class RequestStackAction implements Action {
    readonly type = REQUEST_STACK;
    constructor(public payload: number /* stack id */) {}
}

export class RequestStackSuccessAction implements Action {
    readonly type = REQUEST_STACK_SUCCESS;
    constructor(public payload: Stack) {}
}

export class RequestStackFailAction implements Action {
    readonly type = REQUEST_STACK_FAIL;
}

export class UpdateStackAction implements Action {
    readonly type = UPDATE_STACK;
    constructor(public payload: StackEditFormValue) {}
}

export class UpdateStackSuccessAction implements Action {
    readonly type = UPDATE_STACK_SUCCESS;
    constructor(public payload: Stack) {}
}

export class UpdateStackFailAction implements Action {
    readonly type = UPDATE_STACK_FAIL;
}

export class AddLikeAction implements Action {
    readonly type = ADD_LIKE;
    constructor(public payload: number /* stack id */) {}
}

export class AddLikeSuccessAction implements Action {
    readonly type = ADD_LIKE_SUCCESS;
    constructor(public payload: Stack) {}
}

export class AddLikeFailAction implements Action {
    readonly type = ADD_LIKE_FAIL;
}

export type Actions
    = RequestStackAction
    | RequestStackSuccessAction
    | RequestStackFailAction
    | UpdateStackAction
    | UpdateStackSuccessAction
    | UpdateStackFailAction
    | AddLikeAction
    | AddLikeSuccessAction
    | AddLikeFailAction
    ;
