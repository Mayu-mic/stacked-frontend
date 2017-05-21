import { StackStatus } from '../models/StackStatus';
import { StackEditFormValue } from '../components/StackEditForm.component';
import { Stack } from '../models/Stack';
import { Action } from '@ngrx/store';

export const REQUEST_STACK = '[Stack] Request';
export const REQUEST_STACK_SUCCESS = '[Stack] Request Success';
export const REQUEST_STACK_FAIL = '[Stack] Request Fail';

export const UPDATE_STACK = '[Stack] Update';
export const UPDATE_STACK_SUCCESS = '[Stack] Update Success';
export const UPDATE_STACK_FAIL = '[Stack] Update Fail';

export const DELETE_STACK = '[Stack] Delete';
export const DELETE_STACK_SUCCESS = '[Stack] Delete Success';
export const DELETE_STACK_FAIL = '[Stack] Delete Fail';

export const ADD_LIKE = '[Stack] Add Like';
export const ADD_LIKE_SUCCESS = '[Stack] Add Like Success';
export const ADD_LIKE_FAIL = '[Stack] Add Like Fail';

export const REMOVE_LIKE = '[Stack] Remove Like';
export const REMOVE_LIKE_SUCCESS = '[Stack] Remove Like Success';
export const REMOVE_LIKE_FAIL = '[Stack] Remove Like Fail';

export const CHANGE_STATUS = '[Stack] Change Status';
export const CHANGE_STATUS_SUCCESS = '[Stack] Change Status Success';
export const CHANGE_STATUS_FAIL = '[Stack] Change Status Fail';

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

export class DeleteStackAction implements Action {
    readonly type = DELETE_STACK;
    constructor(public payload: number /* stack id */) {}
}

export class DeleteStackSuccessAction implements Action {
    readonly type = DELETE_STACK_SUCCESS;
    constructor(public payload: Stack) {}
}

export class DeleteStackFailAction implements Action {
    readonly type = DELETE_STACK_FAIL;
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
    constructor(public payload: number /* stack id */) {}
}

export class RemoveLikeAction implements Action {
    readonly type = REMOVE_LIKE;
    constructor(public payload: number /* stack id */) {}
}

export class RemoveLikeSuccessAction implements Action {
    readonly type = REMOVE_LIKE_SUCCESS;
    constructor(public payload: Stack) {}
}

export class RemoveLikeFailAction implements Action {
    readonly type = REMOVE_LIKE_FAIL;
    constructor(public payload: number /* stack id */) {}
}

export class ChangeStatusAction implements Action {
    readonly type = CHANGE_STATUS;
    constructor(public payload: number /* stack id */, public status: StackStatus) {}
}

export class ChangeStatusSuccessAction implements Action {
    readonly type = CHANGE_STATUS_SUCCESS;
    constructor(public payload: Stack) {}
}

export class ChangeStatusFailAction implements Action {
    readonly type = CHANGE_STATUS_FAIL;
}

export type Actions
    = RequestStackAction
    | RequestStackSuccessAction
    | RequestStackFailAction
    | UpdateStackAction
    | UpdateStackSuccessAction
    | UpdateStackFailAction
    | DeleteStackAction
    | DeleteStackSuccessAction
    | DeleteStackFailAction
    | AddLikeAction
    | AddLikeSuccessAction
    | AddLikeFailAction
    | RemoveLikeAction
    | RemoveLikeSuccessAction
    | RemoveLikeFailAction
    | ChangeStatusAction
    | ChangeStatusSuccessAction
    | ChangeStatusFailAction
    ;
