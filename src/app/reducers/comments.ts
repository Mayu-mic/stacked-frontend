import { Comment } from '../models/Comment';
import * as fromComments from '../actions/comments';

type State = Comment[];
const initialState = [];

export function reducer(state = initialState, action: fromComments.Actions) {
    switch (action.type) {
        case fromComments.REQUEST_COMMENTS_SUCCESS:
            return action.payload;

        case fromComments.ADD_COMMENT_SUCCESS:
            return [...state, action.payload];

        default:
            return state;
    }
}
