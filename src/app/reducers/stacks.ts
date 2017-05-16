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

        default:
            return state;
    }
}
