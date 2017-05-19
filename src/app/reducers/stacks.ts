import { ObjectUnsubscribedError } from 'rxjs/Rx';
import { Stack } from '../models/Stack';
import * as fromStacks from '../actions/stacks';
import * as fromStack from '../actions/stack';

type State = Stack[];
const initialState: State = [];

export function reducer(state = initialState, action: fromStacks.Actions | fromStack.Actions) {
    switch (action.type) {
        case fromStacks.REQUEST_STACKS_SUCCESS:
        case fromStacks.CHANGE_FILTER_SUCCESS:
            return action.payload;

        case fromStacks.ADD_STACK_SUCCESS:
            return [ action.payload, ...state ];

        case fromStack.ADD_LIKE:
            return state.map(stack =>
                stack.id === action.payload ? {
                    ...stack,
                    star_count: stack.star_count + 1,
                } : stack
            );

        case fromStack.ADD_LIKE_SUCCESS:
            return state.map(stack =>
                stack.id === action.payload.id ? action.payload : stack
            );

        case fromStack.CHANGE_STATUS_SUCCESS:
            return state.map(stack =>
                stack.id === action.payload.id ? action.payload : stack
            );

        case fromStack.DELETE_STACK_SUCCESS:
            return state.filter(stack => stack.id !== action.payload.id);

        default:
            return state;
    }
}
