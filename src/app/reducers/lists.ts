import { List } from '../models/List';
import * as fromLists from '../actions/lists';

type State = List[];
const initialState: State = [];

export function reducer(state = initialState, action: fromLists.Actions): State {
    switch (action.type) {
        case fromLists.REQUEST_LISTS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
