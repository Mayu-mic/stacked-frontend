import { StackStatus } from '../models/StackStatus';
import { StackEditFormValue } from '../components/StackEditForm.component';
import { User } from '../models/User';
import { CommentFormValue } from '../components/CommentForm.component';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Stack } from '../models/Stack';
import { Observable } from 'rxjs/Rx';
import { Component, Input, OnInit } from '@angular/core';
import * as fromStack from '../actions/stack';

@Component({
    selector: 'stack-container',
    template: require('./Stack.container.html')
})
export class StackContainer implements OnInit {
    @Input() stackId: number;

    user$: Observable<User>;
    stack$: Observable<Stack>;

    currentStack: Stack = null;
    currentUser: User = null;

    stackEditing = false;

    constructor(
        private store: Store<any>
    ) {
        this.user$ = store.select('user');
        this.stack$ = store.select('stack');
    }

    ngOnInit(): void {
        this.user$.subscribe(user => this.currentUser = user);
        this.stack$.subscribe(stack => this.currentStack = stack);
        this.stack$.skip(1).subscribe(stack => (stack == null) && (location.href = '/'));
        this.store.dispatch(new fromStack.RequestStackAction(this.stackId));
    }

    addStackLike() {
        this.store.dispatch(new fromStack.AddLikeAction(this.currentStack.id));
    }

    removeStackLike() {
        this.store.dispatch(new fromStack.RemoveLikeAction(this.currentStack.id));
    }

    toggleEditMode() {
        this.stackEditing = !this.stackEditing;
    }

    updateStack(value: StackEditFormValue) {
        this.store.dispatch(new fromStack.UpdateStackAction(value));
        this.toggleEditMode();
    }

    deleteStack() {
        this.store.dispatch(new fromStack.DeleteStackAction(this.currentStack.id));
    }

    changeStackStatus(value: StackStatus, stackId: number) {
        this.store.dispatch(new fromStack.ChangeStatusAction(stackId, value));
    }
}
