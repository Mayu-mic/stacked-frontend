import { AddLikeAction, AddStackAction, RequestStacksAction } from '../actions/stacks';
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

    @Effect()
    addStack$: Observable<Action> = this.action$
        .ofType(fromStacks.ADD_STACK)
        .switchMap((action: AddStackAction) =>
            this.stackService.addStack(action.payload.listId, action.payload.title, action.payload.note)
                .map(stack => new fromStacks.AddStackSuccessAction(stack))
                .catch(_ => of(new fromStacks.AddStackFailAction()))
        );

    @Effect()
    addLike$: Observable<Action> = this.action$
        .ofType(fromStacks.ADD_LIKE)
        .switchMap((action: AddLikeAction) =>
            this.stackService.addLike(action.payload)
                .map(stack => new fromStacks.AddLikeSuccessAction(stack))
                .catch(_ => of(new fromStacks.AddLikeFailAction()))
        );

    private stackService: StackedStackService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.stackService = new StackedStackService(tokenService);
    }
}
