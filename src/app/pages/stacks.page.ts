import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stacked-app',
    template: require('./Stacks.page.html')
})
export class StacksPage implements OnInit {
    currentStackId: number;

    constructor(
        private store: Store<any>,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void { }
}
