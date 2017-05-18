import { User } from '../models/User';
import * as fromUser from '../actions/user';

type State = User;
const initialState: State = null;

export function reducer(state = initialState, action: fromUser.Actions): State {
    switch (action.type) {
        case fromUser.REQUEST_USER_INFO_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
