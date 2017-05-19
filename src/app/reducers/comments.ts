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

        case fromComments.DELETE_COMMENT_SUCCESS:
            return state.filter(comment => comment.id !== action.payload.id);

        case fromComments.LIKE_COMMENT:
            return state.map(comment =>
                comment.id === action.payload ? {
                    star_count: comment.star_count + 1,
                    ...comment,
                } : comment
            );

        case fromComments.LIKE_COMMENT_SUCCESS:
            return state.map(comment =>
                comment.id === action.payload.id ? action.payload : comment
            );

        default:
            return state;
    }
}
