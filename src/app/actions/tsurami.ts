import { Action } from '@ngrx/store';
import { Tsurami } from '../models/Tsurami';
import { Status } from '../models/Status';

export const ADD_SORENA =             '[Tsurami] Add Sorena';
export const ADD_SORENA_SUCCESS =     '[Tsurami] Add Sorena Success';
export const ADD_SORENA_FAIL =        '[Tsurami] Add Sorena Fail';
export const CHANGE_STATUS =          '[Tsurami] Change Status';
export const CHANGE_STATUS_SUCCESS =  '[Tsurami] Change Status Success';
export const CHANGE_STATUS_FAIL =     '[Tsurami] Change Status Fail';

export class AddSorenaAction implements Action {
  readonly type = ADD_SORENA;
  constructor(public payload: number) {}
}

export class AddSorenaSuccessAction implements Action {
  readonly type = ADD_SORENA_SUCCESS;
  constructor(public payload: Tsurami) {}
}

export class AddSorenaFailAction implements Action {
  readonly type = ADD_SORENA_FAIL;
  constructor(public payload: number) {}
}

export class ChangeStatusAction implements Action {
    readonly type = CHANGE_STATUS;
    constructor(public payload: Status, public id: number) {}
}

export class ChangeStatusSuccessAction implements Action {
    readonly type = CHANGE_STATUS_SUCCESS;
    constructor(public payload: Tsurami) {}
}

export class ChangeStatusFailAction implements Action {
    readonly type = CHANGE_STATUS_FAIL;
}

export type Actions
  = AddSorenaAction
  | AddSorenaSuccessAction
  | AddSorenaFailAction
  | ChangeStatusAction
  | ChangeStatusSuccessAction
  | ChangeStatusFailAction;
