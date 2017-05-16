import {StoreModule, combineReducers} from '@ngrx/store';
import * as fromLists from '../reducers/lists';
import * as fromUser from '../reducers/user';
import * as fromStacks from '../reducers/stacks';

const reducer = combineReducers(
    {
        stacks: fromStacks.reducer,
        lists: fromLists.reducer,
        user: fromUser.reducer,
    }
);

export const store = StoreModule.provideStore(reducer);
