import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { RequestStackAction } from '../actions/stack';
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

    private stackService: StackedStackService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.stackService = new StackedStackService(tokenService);
    }
}