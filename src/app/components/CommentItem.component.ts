import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
    selector: 'comment-item-component',
    template: require('./CommentItem.component.html')
})
export class CommentItemComponent {
    @Input() comment: Comment;
    @Output() handleLike: EventEmitter<any> = new EventEmitter(false);

    like(e: Event) {
        e.preventDefault();
        this.handleLike.emit(this.comment.id);
    }
}
