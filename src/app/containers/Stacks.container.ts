import { StacksFilter } from '../models/StacksFilter';
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
    filter$: Observable<StacksFilter>;

    currentFilter: StacksFilter;
    formExpanded: boolean = false;

    listId = 1; // 決め打ち

    constructor(
        private store: Store<any>
    ) {
        this.stacks$ = store.select('stacks');
        this.user$ = store.select('user');
        this.filter$ = store.select('filter');
        this.filter$.subscribe(filter => this.currentFilter = filter);
    }

    ngOnInit(): void {
        this.store.dispatch(new fromStacks.RequestStacksAction(this.listId, this.currentFilter));
    }

    addStack(value: StackCreateFormValue) {
        this.store.dispatch(new fromStacks.AddStackAction(value));
    }

    deleteStack(stackId: number) {
        this.store.dispatch(new fromStack.DeleteStackAction(stackId));
    }

    addLike(stackId: number) {
        this.store.dispatch(new fromStack.AddLikeAction(stackId));
    }

    handleStatusChange(status: StackStatus, stackId: number) {
        this.store.dispatch(new fromStack.ChangeStatusAction(stackId, status));
    }

    changeFilter(filter: StacksFilter) {
        this.store.dispatch(new fromStacks.ChangeFilterAction(this.listId, filter));
    }

    toggleFormExpand() {
        this.formExpanded = !this.formExpanded;
    }
}
