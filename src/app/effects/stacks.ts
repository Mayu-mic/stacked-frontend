import { RequestStacksAction } from '../actions/stacks';
import { StackedStackService } from '../services/StackedStackService';
import { Angular2TokenService } from 'angular2-token';
import { StackedListService } from '../services/StackedListService';
import { RequestListsAction } from '../actions/lists';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as lists from '../actions/lists';
import * as fromStacks from '../actions/stacks';

@Injectable()
export class StacksEffects {

    @Effect()
    loadStacks$: Observable<Action> = this.action$
        .ofType(fromStacks.REQUEST_STACKS)
        .switchMap((action: RequestStacksAction) =>
            this.stackService.getStacks(action.payload)
                .map(stacks => new fromStacks.RequestStacksSuccessAction(stacks))
                .catch(_ => of(new fromStacks.RequestStacksFailAction()))
        );

    private stackService: StackedStackService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.stackService = new StackedStackService(tokenService);
    }
}
