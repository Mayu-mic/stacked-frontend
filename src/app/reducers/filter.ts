import { StacksFilter } from '../models/StacksFilter';
import * as fromStacks from '../actions/stacks';

type State = StacksFilter;
export const initialState: StacksFilter = 'active';

export function reducer(state = initialState, action: fromStacks.Actions): State {
    switch (action.type) {
        case fromStacks.CHANGE_FILTER_SUCCESS:
            return action.filter;

        default:
            return state;
    }
}
