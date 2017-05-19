import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import {
    AddLikeAction,
    ChangeStatusAction,
    DeleteStackAction,
    RequestStackAction,
    UpdateStackAction
} from '../actions/stack';
import { Effect, Actions } from '@ngrx/effects';
import { StackedStackService } from '../services/StackedStackService';
import { Angular2TokenService } from 'angular2-token';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import * as fromStack from '../actions/stack';

@Injectable()
export class StackEffects {

    @Effect()
    loadStack$: Observable<Action> = this.action$
        .ofType(fromStack.REQUEST_STACK)
        .switchMap((action: RequestStackAction) =>
            this.stackService.getStack(action.payload)
                .map(stack => new fromStack.RequestStackSuccessAction(stack))
                .catch(_ => of(new fromStack.RequestStackFailAction()))
        );

    @Effect()
    updateStack$: Observable<Action> = this.action$
        .ofType(fromStack.UPDATE_STACK)
        .switchMap((action: UpdateStackAction) =>
            this.stackService.updateStack(action.payload.stackId, action.payload.title, action.payload.note)
                .map(stack => new fromStack.UpdateStackSuccessAction(stack))
                .catch(_ => of(new fromStack.UpdateStackFailAction()))
        );

    @Effect()
    deleteStack$: Observable<Action> = this.action$
        .ofType(fromStack.DELETE_STACK)
        .switchMap((action: DeleteStackAction) =>
            this.stackService.deleteStack(action.payload)
                .map(stack => new fromStack.DeleteStackSuccessAction(stack))
                .catch(_ => of(new fromStack.DeleteStackFailAction()))
        );

    @Effect()
    addLike$: Observable<Action> = this.action$
        .ofType(fromStack.ADD_LIKE)
        .switchMap((action: AddLikeAction) =>
            this.stackService.addLike(action.payload)
                .map(stack => new fromStack.AddLikeSuccessAction(stack))
                .catch(_ => of(new fromStack.AddLikeFailAction(action.payload)))
        );

    @Effect()
    changeStatus$: Observable<Action> = this.action$
        .ofType(fromStack.CHANGE_STATUS)
        .switchMap((action: ChangeStatusAction) =>
            this.stackService.changeStackStatus(action.payload, action.status)
                .map(stack => new fromStack.ChangeStatusSuccessAction(stack))
                .catch(_ => of(new fromStack.ChangeStatusFailAction()))
        );

    private stackService: StackedStackService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.stackService = new StackedStackService(tokenService);
    }
}
