import { Stack } from '../models/Stack';
import { Action } from '@ngrx/store';

export const REQUEST_STACK = '[Stack] Request';
export const REQUEST_STACK_SUCCESS = '[Stack] Request Success';
export const REQUEST_STACK_FAIL = '[Stack] Request Fail';

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

export type Actions
    = RequestStackAction
    | RequestStackSuccessAction
    | RequestStackFailAction
    ;
