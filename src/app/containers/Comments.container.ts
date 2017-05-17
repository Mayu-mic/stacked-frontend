import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromComments from '../actions/comments';

@Component({
    selector: 'comments-container',
    template: require('./Comments.container.html')
})
export class CommentsContainer implements OnInit {
    @Input() stackId: number;
    comments$: Observable<Comment[]>;

    constructor(
        private store: Store<any>,
    ) {
        this.comments$ = store.select('comments');
    }

    ngOnInit(): void {
        this.store.dispatch(new fromComments.RequestCommentsAction(this.stackId));
    }
}
