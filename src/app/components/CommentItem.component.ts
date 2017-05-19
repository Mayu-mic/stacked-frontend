import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
    selector: 'comment-item-component',
    template: require('./CommentItem.component.html')
})
export class CommentItemComponent {
    @Input() comment: Comment;
    @Input() owned: boolean;
    @Output() handleLike: EventEmitter<any> = new EventEmitter(false);
    @Output() handleDelete: EventEmitter<any> = new EventEmitter(false);

    like() {
        this.handleLike.emit();
    }

    delete() {
        if (confirm('delete?')) {
            this.handleDelete.emit();
        }
    }
}
