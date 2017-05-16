import { StackFormValue } from '../components/StackForm.component';
import { Stack } from '../models/Stack';
import { List } from '../models/List';
import { StackedListService } from '../services/StackedListService';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import * as fromLists from '../actions/lists';
import * as fromStacks from '../actions/stacks';

interface RouteParams {
    page: number;
}

@Component({
  selector: 'main-section-container',
  template: require('./MainSection.container.html')
})
export class MainSectionContainer implements OnInit {

    lists$: Observable<List[]>;
    stacks$: Observable<Stack[]>;

    constructor(
        private store: Store<any>
    ) {
        this.lists$ = store.select('lists');
        this.stacks$ = store.select('stacks');
    }

    ngOnInit(): void {
        const listId = 1; // 決め打ち
        this.store.dispatch(new fromStacks.RequestStacksAction(listId));
    }

    addStack(value: StackFormValue) {
        this.store.dispatch(new fromStacks.AddStackAction(value));
    }

    addLike(stackId: number) {
        this.store.dispatch(new fromStacks.AddLikeAction(stackId));
    }
}