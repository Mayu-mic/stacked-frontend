import { Stack } from '../models/Stack';
import { Action } from '@ngrx/store';

export const REQUEST_STACKS = '[Stacks] Request';
export const REQUEST_STACKS_SUCCESS = '[Stacks] Request Success';
export const REQUEST_STACKS_FAIL = '[Stacks] Request Fail';

export class RequestStacksAction implements Action {
    readonly type = REQUEST_STACKS;
    constructor(public payload /* list id */ : number ) {}
}

export class RequestStacksSuccessAction implements Action {
    readonly type = REQUEST_STACKS_SUCCESS;
    constructor(public payload: Stack[]) {}
}

export class RequestStacksFailAction implements Action {
    readonly type = REQUEST_STACKS_FAIL;
}

export type Actions
    = RequestStacksAction
    | RequestStacksSuccessAction
    | RequestStacksFailAction
    ;
