import { StackFormValue } from '../components/StackForm.component';
import { Stack } from '../models/Stack';
import { Action } from '@ngrx/store';

export const REQUEST_STACKS = '[Stacks] Request';
export const REQUEST_STACKS_SUCCESS = '[Stacks] Request Success';
export const REQUEST_STACKS_FAIL = '[Stacks] Request Fail';

export const ADD_STACK = '[Stacks] Add Stack';
export const ADD_STACK_SUCCESS = '[Stacks] Add Stack Success';
export const ADD_STACK_FAIL = '[Stacks] Add Stack Fail';

export class RequestStacksAction implements Action {
    readonly type = REQUEST_STACKS;
    constructor(public payload: number /* list id */) {}
}

export class RequestStacksSuccessAction implements Action {
    readonly type = REQUEST_STACKS_SUCCESS;
    constructor(public payload: Stack[]) {}
}

export class RequestStacksFailAction implements Action {
    readonly type = REQUEST_STACKS_FAIL;
}

export class AddStackAction implements Action {
    readonly type = ADD_STACK;
    constructor(public payload: StackFormValue) {}
}

export class AddStackSuccessAction implements Action {
    readonly type = ADD_STACK_SUCCESS;
    constructor(public payload: Stack) {}
}

export class AddStackFailAction implements Action {
    readonly type = ADD_STACK_FAIL;
}


export type Actions
    = RequestStacksAction
    | RequestStacksSuccessAction
    | RequestStacksFailAction
    | AddStackAction
    | AddStackSuccessAction
    | AddStackFailAction
    ;
