import { ObjectUnsubscribedError } from 'rxjs/Rx';
import { Stack } from '../models/Stack';
import * as fromStack from '../actions/stacks';

type State = Stack[];
const initialState: State = [];

export function reducer(state = initialState, action: fromStack.Actions) {
    switch (action.type) {
        case fromStack.REQUEST_STACKS_SUCCESS:
            return action.payload;

        case fromStack.ADD_STACK_SUCCESS:
            return [ action.payload, ...state ];

        case fromStack.ADD_LIKE:
            return state.map(stack =>
                stack.id === action.payload ? { star_count: stack.star_count + 1, ...stack } : stack
            );

        case fromStack.ADD_LIKE_SUCCESS:
            return state.map(stack =>
                stack.id === action.payload.id ? action.payload : stack
            );

        default:
            return state;
    }
}
