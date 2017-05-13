import { Order } from '../models/Order';
import { Action } from '@ngrx/store';
import { Tsurami } from '../models/Tsurami';
import { Visibility } from '../models/Visibility';

export const REQUEST_TSURAMIS =          '[Tsuramis] Request';
export const REQUEST_TSURAMIS_SUCCESS =  '[Tsuramis] Request Success';
export const REQUEST_TSURAMIS_FAIL =     '[Tsuramis] Request Fail';
export const CHANGE_ORDER =              '[Tsuramis] Change Order';
export const CHANGE_ORDER_SUCCESS =      '[Tsuramis] Change Order Success';
export const CHANGE_ORDER_FAIL =         '[Tsuramis] Change Order Fail';
export const CHANGE_VISIBILITY =         '[Tsuramis] Change Visibility';
export const CHANGE_VISIBILITY_SUCCESS = '[Tsuramis] Change Visibility Success';
export const CHANGE_VISIBILITY_FAIL =    '[Tsuramis] Change Visibility Fail';

export class RequestAction implements Action {
  readonly type = REQUEST_TSURAMIS;
  constructor(public payload: number) {}
}

export class RequestSuccessAction implements Action {
  readonly type = REQUEST_TSURAMIS_SUCCESS;
  constructor(public payload: Tsurami[]) {}
}

export class RequestFailAction implements Action {
  readonly type = REQUEST_TSURAMIS_FAIL;
}

export class ChangeOrderAction implements Action {
  readonly type = CHANGE_ORDER;
  constructor(public payload: Order, public page: number, public currentVisibility: Visibility) {}
}

export class ChangeOrderSuccessAction implements Action {
  readonly type = CHANGE_ORDER_SUCCESS;
  constructor(public payload: Tsurami[], public order: Order) {}
}

export class ChangeOrderFailAction implements Action {
  readonly type = CHANGE_ORDER_FAIL;
}

export class ChangeVisibilityAction implements Action {
  readonly type = CHANGE_VISIBILITY;
  constructor(public payload: Visibility, public page: number, public currentOrder: Order) {}
}

export class ChangeVisibilitySuccessAction implements Action {
  readonly type = CHANGE_VISIBILITY_SUCCESS;
  constructor(public payload: Tsurami[], public visibility: Visibility) {}
}

export class ChangeVisibilityFailAction implements Action {
  readonly type = CHANGE_VISIBILITY_FAIL;
}

export type Actions
 = RequestAction
 | RequestSuccessAction
 | RequestFailAction
 | ChangeOrderAction
 | ChangeOrderSuccessAction
 | ChangeOrderFailAction
 | ChangeVisibilityAction
 | ChangeVisibilitySuccessAction
 | ChangeVisibilityFailAction;
