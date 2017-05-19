import { StacksFilter } from '../models/StacksFilter';
import { Stack } from '../models/Stack';
import { Action } from '@ngrx/store';
import { StackCreateFormValue } from '../components/StackCreateForm.component';

export const REQUEST_STACKS = '[Stacks] Request';
export const REQUEST_STACKS_SUCCESS = '[Stacks] Request Success';
export const REQUEST_STACKS_FAIL = '[Stacks] Request Fail';

export const ADD_STACK = '[Stacks] Add Stack';
export const ADD_STACK_SUCCESS = '[Stacks] Add Stack Success';
export const ADD_STACK_FAIL = '[Stacks] Add Stack Fail';

export const CHANGE_FILTER = '[Stacks] Change Filter';
export const CHANGE_FILTER_SUCCESS = '[Stacks] Change Filter Success';
export const CHANGE_FILTER_FAIL = '[Stacks] Change Filter Fail';

export class RequestStacksAction implements Action {
    readonly type = REQUEST_STACKS;
    constructor(public payload: number /* list id */, public filter: StacksFilter) {}
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
    constructor(public payload: StackCreateFormValue) {}
}

export class AddStackSuccessAction implements Action {
    readonly type = ADD_STACK_SUCCESS;
    constructor(public payload: Stack) {}
}

export class AddStackFailAction implements Action {
    readonly type = ADD_STACK_FAIL;
}

export class ChangeFilterAction implements Action {
    readonly type = CHANGE_FILTER;
    constructor(public payload: number /* list id */, public filter: StacksFilter) {}
}

export class ChangeFilterSuccessAction implements Action {
    readonly type = CHANGE_FILTER_SUCCESS;
    constructor(public payload: Stack[], public filter: StacksFilter) {}
}

export class ChangeFilterFailAction implements Action {
    readonly type = CHANGE_FILTER_FAIL;
}

export type Actions
    = RequestStacksAction
    | RequestStacksSuccessAction
    | RequestStacksFailAction
    | AddStackAction
    | AddStackSuccessAction
    | AddStackFailAction
    | ChangeFilterAction
    | ChangeFilterSuccessAction
    | ChangeFilterFailAction
    ;
