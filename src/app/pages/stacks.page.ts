import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface RouteParams {
    stackId: number;
}

@Component({
    selector: 'stacked-app',
    template: require('./Stacks.page.html')
})
export class StacksPage implements OnInit {
    stackId$: Observable<number>;
    currentStackId: number;

    constructor(
        private route: ActivatedRoute
    ) {
        this.stackId$ = this.route.params.map((p: RouteParams) => p.stackId);
    }

    ngOnInit(): void {
        this.stackId$.subscribe(id => this.currentStackId = id);
    }
}
