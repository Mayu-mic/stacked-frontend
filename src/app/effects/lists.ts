import { Angular2TokenService } from 'angular2-token';
import { StackedListService } from '../services/StackedListService';
import { RequestListsAction } from '../actions/lists';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as lists from '../actions/lists';

@Injectable()
export class ListsEffects {

    @Effect()
    loadLists$: Observable<Action> = this.action$
        .ofType(lists.REQUEST_LISTS)
        .switchMap((action: RequestListsAction) =>
            this.listService.getLists()
                .map(ls => new lists.RequestListsSuccessAction(ls))
                .catch(_ => of(new lists.RequestListsFailAction()))
        );

    private listService: StackedListService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.listService = new StackedListService(tokenService);
    }

}
