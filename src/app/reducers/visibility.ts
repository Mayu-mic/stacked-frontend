import { Visibility } from '../models/Visibility';
import * as fromTsuramis from '../actions/tsuramis';

type State = Visibility;
const initialState: State = Visibility.SHOW_ALL;

export function reducer(state = initialState, action: fromTsuramis.Actions) {
    switch (action.type) {
        case fromTsuramis.CHANGE_VISIBILITY_SUCCESS:
            return action.visibility;

        default:
            return state;
    }
}
