import { User } from '../models/User';
import * as fromUser from '../actions/user';

type State = User;
const initialState: State = null;

export function reducer(state = initialState, action: fromUser.Actions): State {
    switch (action.type) {
        case fromUser.REQUEST_LOGIN_SUCCESS:
        case fromUser.CHECK_LOGIN_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
