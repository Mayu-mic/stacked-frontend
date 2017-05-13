import { Order } from '../models/Order';
import * as fromTsuramis from '../actions/tsuramis';

type State = Order;
const initialState: State = Order.SORENA_DESC;

export function reducer(state = initialState, action: fromTsuramis.Actions) {
    switch (action.type) {
        case fromTsuramis.CHANGE_ORDER_SUCCESS:
            return action.order;

        default:
            return state;
    }
};
