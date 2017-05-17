import { of } from 'rxjs/observable/of';
import { RequestCommentsAction } from '../actions/comments';
import { Angular2TokenService } from 'angular2-token';
import { StackedCommentService } from '../services/StackedCommentService';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromComments from '../actions/comments';

@Injectable()
export class CommentEffects {

    @Effect()
    loadComments$: Observable<Action> = this.action$
        .ofType(fromComments.ADD_COMMENT)
        .switchMap((action: RequestCommentsAction) =>
            this.commentService.getComments(action.payload)
                .map(comments => new fromComments.RequestCommentsSuccessAction(comments))
                .catch(_ => of(new fromComments.RequestCommentsFailAction()))
        );

    private commentService: StackedCommentService;

    constructor(private action$: Actions, private tokenService: Angular2TokenService) {
        this.commentService = new StackedCommentService(tokenService);
    }

}
