import { Visibility } from '../models/Visibility';
import { Tsurami } from '../models/Tsurami';
import * as fromTsuramis from '../actions/tsuramis';
import * as fromTsurami from '../actions/tsurami';
import { Order } from '../models/Order';

type State = Tsurami[];
const initialState: State = [];

export function reducer(state = initialState, action: fromTsurami.Actions | fromTsuramis.Actions): State {
    switch (action.type) {
        case fromTsuramis.REQUEST_TSURAMIS:
        case fromTsuramis.CHANGE_ORDER:
        case fromTsuramis.CHANGE_VISIBILITY:
            return state;

        case fromTsuramis.CHANGE_ORDER_SUCCESS:
        case fromTsuramis.CHANGE_VISIBILITY_SUCCESS:
        case fromTsuramis.REQUEST_TSURAMIS_SUCCESS:
            return action.payload;

        case fromTsurami.ADD_SORENA:
            const id = action.payload;
            return state.map(t => t.id === id ?
                Object.assign({}, t, { sorena: t.sorena + 1 }) : t
            );

        case fromTsurami.ADD_SORENA_SUCCESS:
        case fromTsurami.CHANGE_STATUS_SUCCESS:
            const tsurami = action.payload;
            return state.map(t => t.id === tsurami.id ? tsurami : t);

        case fromTsurami.ADD_SORENA_FAIL:
            return state.map(t => t.id === action.payload ?
                Object.assign({}, t, { sorena: t.sorena - 1 }) : t
            );

        default:
            return state;
    }
}
