import { StackStatus } from '../models/StackStatus';
import { User } from '../models/User';
import { Stack } from '../models/Stack';
import { List } from '../models/List';
import { StackedListService } from '../services/StackedListService';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import * as fromLists from '../actions/lists';
import * as fromStacks from '../actions/stacks';
import * as fromStack from '../actions/stack';
import { StackCreateFormValue } from '../components/StackCreateForm.component';

interface RouteParams {
    page: number;
}

@Component({
  selector: 'stacks-container',
  template: require('./Stacks.container.html')
})
export class StacksContainer implements OnInit {
    stacks$: Observable<Stack[]>;
    user$: Observable<User>;

    listId = 1; // 決め打ち

    constructor(
        private store: Store<any>
    ) {
        this.stacks$ = store.select('stacks');
        this.user$ = store.select('user');
    }

    ngOnInit(): void {
        this.store.dispatch(new fromStacks.RequestStacksAction(this.listId));
    }

    addStack(value: StackCreateFormValue) {
        this.store.dispatch(new fromStacks.AddStackAction(value));
    }

    addLike(stackId: number) {
        this.store.dispatch(new fromStack.AddLikeAction(stackId));
    }

    handleStatusChange(status: StackStatus, stackId: number) {
        this.store.dispatch(new fromStack.ChangeStatusAction(stackId, status));
    }
}
