import { StackEditFormValue } from '../components/StackEditForm.component';
import { User } from '../models/User';
import { CommentFormValue } from '../components/CommentForm.component';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Stack } from '../models/Stack';
import { Observable } from 'rxjs/Rx';
import { Component, Input, OnInit } from '@angular/core';
import * as fromStack from '../actions/stack';
import * as fromComments from '../actions/comments';

interface RouteParams {
    stackId: number;
}

@Component({
    selector: 'stack-container',
    template: require('./Stack.container.html')
})
export class StackContainer implements OnInit {
    user$: Observable<User>;
    stack$: Observable<Stack>;
    comments$: Observable<Comment[]>;

    currentStack: Stack = null;
    currentUser: User = null;

    stackEditing = false;

    constructor(
        private store: Store<any>,
        private route: ActivatedRoute
    ) {
        this.user$ = store.select('user');
        this.stack$ = store.select('stack');
        this.comments$ = store.select('comments');
    }

    ngOnInit(): void {
        this.route.params
            .subscribe((p: RouteParams) => {
                this.user$.subscribe(user => this.currentUser = user);
                this.stack$.subscribe(stack => this.currentStack = stack);
                this.store.dispatch(new fromStack.RequestStackAction(p.stackId));
                this.store.dispatch(new fromComments.RequestCommentsAction(p.stackId));
            });
    }

    addStackLike() {
        this.store.dispatch(new fromStack.AddLikeAction(this.currentStack.id));
    }

    addComment(value: CommentFormValue) {
        this.store.dispatch(new fromComments.AddCommentAction(value));
    }

    toggleEditMode() {
        this.stackEditing = !this.stackEditing;
    }

    updateStack(value: StackEditFormValue) {
        this.store.dispatch(new fromStack.UpdateStackAction(value));
        this.toggleEditMode();
    }
}
