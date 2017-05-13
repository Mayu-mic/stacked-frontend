import { AddSorenaAction, ChangeStatusAction } from '../actions/tsurami';
import { ChangeOrderAction, ChangeVisibilityAction, RequestAction } from '../actions/tsuramis';
import { DEFAULT_GET_LIMIT, TsuramisService } from '../services/TsuramisService';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as tsuramis from '../actions/tsuramis';
import * as tsurami from '../actions/tsurami';

@Injectable()
export class TsuramiEffects {

    @Effect()
    loadTsuramis$: Observable<Action> = this.action$
        .ofType(tsuramis.REQUEST_TSURAMIS)
        .switchMap((action: RequestAction) =>
            this.tsuramisService.fetch({
                page: action.payload,
            })
                .map(ts => new tsuramis.RequestSuccessAction(ts))
                .catch(_ => of(new tsuramis.RequestFailAction()))
        );

    @Effect()
    addSorena$: Observable<Action> = this.action$
        .ofType(tsurami.ADD_SORENA)
        .switchMap((action: AddSorenaAction) =>
            this.tsuramisService.addSorena(action.payload)
                .map(t => new tsurami.AddSorenaSuccessAction(t))
                .catch(_ => of(new tsurami.AddSorenaFailAction(action.payload)))
        );

    @Effect()
    changeStatus$: Observable<Action> = this.action$
        .ofType(tsurami.CHANGE_STATUS)
        .switchMap((action: ChangeStatusAction) =>
            this.tsuramisService.changeStatus(action.id, action.payload)
                .map(t => new tsurami.ChangeStatusSuccessAction(t))
                .catch(_ => of(new tsurami.ChangeStatusFailAction()))
        );

    @Effect()
    changeVisibility$: Observable<Action> = this.action$
        .ofType(tsuramis.CHANGE_VISIBILITY)
        .switchMap((action: ChangeVisibilityAction) =>
            this.tsuramisService.fetch({
                visibility: action.payload,
                order: action.currentOrder,
                page: action.page,
            })
            .map(ts => new tsuramis.ChangeVisibilitySuccessAction(ts, action.payload))
            .catch(_ => of(new tsuramis.ChangeVisibilityFailAction()))
        );

    @Effect()
    handleChangeOrder$: Observable<Action> = this.action$
        .ofType(tsuramis.CHANGE_ORDER)
        .switchMap((action: ChangeOrderAction) =>
            this.tsuramisService.fetch({
                order: action.payload,
                visibility: action.currentVisibility,
                page: action.page,
            })
            .map(ts => new tsuramis.ChangeOrderSuccessAction(ts, action.payload))
            .catch(_ => of(new tsuramis.ChangeOrderFailAction()))
        );

    constructor(private action$: Actions, private tsuramisService: TsuramisService) {}

}
