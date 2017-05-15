import {StoreModule, combineReducers} from '@ngrx/store';
import * as fromLists from '../reducers/lists';

const reducer = combineReducers(
    {
        lists: fromLists.reducer,
    }
);

export const store = StoreModule.provideStore(reducer);
