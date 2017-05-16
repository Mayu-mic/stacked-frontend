import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Stack } from '../models/Stack';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as fromStack from '../actions/stack';
import * as fromStacks from '../actions/stacks';

interface RouteParams {
    stackId: number;
}

@Component({
    selector: 'stack-container',
    template: require('./Stack.container.html')
})
export class StackContainer implements OnInit {
    stack$: Observable<Stack>;

    constructor(
        private store: Store<any>,
        private route: ActivatedRoute
    ) {
        this.stack$ = store.select('stack');
    }

    ngOnInit(): void {
        this.route.params
            .subscribe((p: RouteParams) => {
                this.store.dispatch(new fromStack.RequestStackAction(p.stackId));
            });
    }

    addLike(stackId: number) {
        this.store.dispatch(new fromStacks.AddLikeAction(stackId));
    }
}
