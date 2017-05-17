import { Action } from '@ngrx/store';
import { Comment } from '../models/Comment';

export const REQUEST_COMMENTS = '[Comments] Request';
export const REQUEST_COMMENTS_SUCCESS = '[Comments] Request Success';
export const REQUEST_COMMENTS_FAIL = '[Comments] Request Fail';

export const ADD_COMMENT = '[Comments] Add Comment';
export const ADD_COMMENT_SUCCESS = '[Comments] Add Comment Success';
export const ADD_COMMENT_FAIL = '[Comments] Add Comment Fail';

export class RequestCommentsAction implements Action {
    readonly type = REQUEST_COMMENTS;
    constructor(public payload: number /* stack id */) {}
}

export class RequestCommentsSuccessAction implements Action {
    readonly type = REQUEST_COMMENTS_SUCCESS;
    constructor(public payload: Comment[]) {}
}

export class RequestCommentsFailAction implements Action {
    readonly type = REQUEST_COMMENTS_FAIL;
}

export type Actions
    = RequestCommentsAction
    | RequestCommentsSuccessAction
    | RequestCommentsFailAction
    ;
