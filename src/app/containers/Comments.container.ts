import { User } from '../models/User';
import { CommentFormValue } from '../components/CommentForm.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, Input, OnInit } from '@angular/core';
import * as fromComments from '../actions/comments';

@Component({
    selector: 'comments-container',
    template: require('./Comments.container.html')
})
export class CommentsContainer implements OnInit {
    @Input() stackId: number;

    comments$: Observable<Comment[]>;
    user$: Observable<User>;

    constructor(
        private store: Store<any>
    ) {
        this.comments$ = store.select('comments');
        this.user$ = store.select('user');
    }

    ngOnInit(): void {
        this.store.dispatch(new fromComments.RequestCommentsAction(this.stackId));
    }

    addCommentLike(commentId: number) {
        this.store.dispatch(new fromComments.LikeCommentAction(commentId));
    }

    addComment(value: CommentFormValue) {
        this.store.dispatch(new fromComments.AddCommentAction(value));
    }

}
