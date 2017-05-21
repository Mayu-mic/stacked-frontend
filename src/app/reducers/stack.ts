import { Stack } from '../models/Stack';
import * as fromStack from '../actions/stack';
import * as fromComments from '../actions/comments';

type State = Stack;
const initialState: State = null;

export function reducer(state = initialState, action: fromStack.Actions | fromComments.Actions) {
    switch (action.type) {
        case fromStack.REQUEST_STACK_SUCCESS:
        case fromStack.UPDATE_STACK_SUCCESS:
        case fromStack.ADD_LIKE_SUCCESS:
        case fromStack.REMOVE_LIKE_SUCCESS:
        case fromStack.CHANGE_STATUS_SUCCESS:
            return action.payload;

        case fromComments.ADD_COMMENT_SUCCESS:
            return state ? {
                ...state,
                comment_count: state.comment_count + 1
            } : state;

        case fromStack.UPDATE_STACK:
            return state ? {
                ...state,
                title: action.payload.title,
                note: action.payload.note,
            } : state;

        case fromStack.ADD_LIKE:
        case fromStack.REMOVE_LIKE_FAIL:
            return state ? {
                ...state,
                star_count: state.star_count + 1
            } : state;

        case fromStack.REMOVE_LIKE:
        case fromStack.ADD_LIKE_FAIL:
            return state ? {
                ...state,
                star_count: state.star_count - 1
            } : state;

        case fromStack.DELETE_STACK_SUCCESS:
            return null;

        default:
            return state;
    }
}
