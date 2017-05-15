import {StoreModule, combineReducers} from '@ngrx/store';
import * as fromLists from '../reducers/lists';
import * as fromUser from '../reducers/user';

const reducer = combineReducers(
    {
        lists: fromLists.reducer,
        user: fromUser.reducer,
    }
);

export const store = StoreModule.provideStore(reducer);
