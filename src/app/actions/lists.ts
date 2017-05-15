import { List } from '../models/List';
import { Action } from '@ngrx/store';

export const REQUEST_LISTS =             '[Lists] Request';
export const REQUEST_LISTS_SUCCESS =     '[Lists] Request Success';
export const REQUEST_LISTS_FAIL =        '[Lists] Request Fail';

export class RequestListsAction implements Action {
  readonly type = REQUEST_LISTS;
}

export class RequestListsSuccessAction implements Action {
  readonly type = REQUEST_LISTS_SUCCESS;
  constructor(public payload: List[]) {}
}

export class RequestListsFailAction implements Action {
  readonly type = REQUEST_LISTS_FAIL;
}

export type Actions
 = RequestListsAction
 | RequestListsSuccessAction
 | RequestListsFailAction
 ;
