import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Stack } from '../models/Stack';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as fromStack from '../actions/stack';

interface RouteParams {
    stackId: number;
}

@Component({
    selector: 'stack-container',
    template: require('./Stack.container.html')
})
export class StackContainer implements OnInit {
    stack$: Observable<Stack>;
    currentStack: Stack;

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

        this.stack$.subscribe(stack => this.currentStack = stack);
    }
}
