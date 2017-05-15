import { List } from '../models/List';
import { StackedListService } from '../services/StackedListService';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import * as fromLists from '../actions/lists';

interface RouteParams {
    page: number;
}

@Component({
  selector: 'main-section-component',
  template: require('./MainSection.component.html')
})
export class MainSectionComponent implements OnInit {

    lists$: Observable<List[]>;

    constructor(
        private store: Store<any>
    ) {
        this.lists$ = store.select('lists');
    }

    ngOnInit(): void {
        this.store.dispatch(new fromLists.RequestListsAction());
    }
}
