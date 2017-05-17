import { Stack } from '../models/Stack';
import * as fromStack from '../actions/stack';
import * as fromComments from '../actions/comments';

type State = Stack;
const initialState: State = null;

export function reducer(state = initialState, action: fromStack.Actions | fromComments.Actions) {
    switch (action.type) {
        case fromStack.REQUEST_STACK_SUCCESS:
        case fromStack.UPDATE_STACK_SUCCESS:
            return action.payload;

        case fromComments.ADD_COMMENT_SUCCESS:
            return { ...state, comment_count: state.comment_count + 1 };

        case fromStack.UPDATE_STACK:
            return {
                ...state,
                title: action.payload.title,
                note: action.payload.note,
            };

        default:
            return state;
    }
}
