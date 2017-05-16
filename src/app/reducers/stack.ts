import { Stack } from '../models/Stack';
import * as fromStack from '../actions/stack';

type State = Stack;
const initialState: State = null;

export function reducer(state = initialState, action: fromStack.Actions) {
    switch (action.type) {
        case fromStack.REQUEST_STACK_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
