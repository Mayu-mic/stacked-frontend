import { ObjectUnsubscribedError } from 'rxjs/Rx';
import { Stack } from '../models/Stack';
import * as fromStacks from '../actions/stacks';

type State = Stack[];
const initialState: State = [];

export function reducer(state = initialState, action: fromStacks.Actions) {
    switch (action.type) {
        case fromStacks.REQUEST_STACKS_SUCCESS:
            return action.payload;

        case fromStacks.ADD_STACK_SUCCESS:
            return [ action.payload, ...state ];

        case fromStacks.ADD_LIKE:
            return state.map(stack =>
                stack.id === action.payload ? { star_count: stack.star_count + 1, ...stack } : stack
            );

        case fromStacks.ADD_LIKE_SUCCESS:
            return state.map(stack =>
                stack.id === action.payload.id ? action.payload : stack
            );

        default:
            return state;
    }
}
