import {StoreModule, combineReducers} from '@ngrx/store';
import * as fromTsuramis from './tsuramis';
import * as fromOrder from './order';
import * as fromVisibility from './visibility';

const reducer = combineReducers(
    {
        tsuramis: fromTsuramis.reducer,
        order: fromOrder.reducer,
        visibility: fromVisibility.reducer,
    }
);

export const store = StoreModule.provideStore(reducer);
