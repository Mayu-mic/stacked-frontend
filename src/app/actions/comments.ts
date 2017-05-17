import { CommentFormValue } from '../components/CommentForm.component';
import { Action } from '@ngrx/store';
import { Comment } from '../models/Comment';

export const REQUEST_COMMENTS = '[Comments] Request';
export const REQUEST_COMMENTS_SUCCESS = '[Comments] Request Success';
export const REQUEST_COMMENTS_FAIL = '[Comments] Request Fail';

export const ADD_COMMENT = '[Comments] Add Comment';
export const ADD_COMMENT_SUCCESS = '[Comments] Add Comment Success';
export const ADD_COMMENT_FAIL = '[Comments] Add Comment Fail';

export const LIKE_COMMENT = '[Comments] Like Comment';
export const LIKE_COMMENT_SUCCESS = '[Comments] Like Comment Success';
export const LIKE_COMMENT_FAIL = '[Comments] Like Comment Fail';

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

export class AddCommentAction implements Action {
    readonly type = ADD_COMMENT;
    constructor(public payload: CommentFormValue) {}
}

export class AddCommentSuccessAction implements Action {
    readonly type = ADD_COMMENT_SUCCESS;
    constructor(public payload: Comment) {}
}

export class AddCommentFailAction implements Action {
    readonly type = ADD_COMMENT_FAIL;
}

export class LikeCommentAction implements Action {
    readonly type = LIKE_COMMENT;
    constructor(public payload: number /* comment id */) {}
}

export class LikeCommentSuccessAction implements Action {
    readonly type = LIKE_COMMENT_SUCCESS;
    constructor(public payload: Comment) {}
}

export class LikeCommentFailAction implements Action {
    readonly type = LIKE_COMMENT_FAIL;
}

export type Actions
    = RequestCommentsAction
    | RequestCommentsSuccessAction
    | RequestCommentsFailAction
    | AddCommentAction
    | AddCommentSuccessAction
    | AddCommentFailAction
    | LikeCommentAction
    | LikeCommentSuccessAction
    | LikeCommentFailAction
    ;
