import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
    selector: 'comment-item-component',
    template: require('./CommentItem.component.html')
})
export class CommentItemComponent {
    @Input() comment: Comment;
    @Input() canLike: boolean;
    @Input() canDelete: boolean;
    @Output() handleToggleLike: EventEmitter<any> = new EventEmitter(false);
    @Output() handleDelete: EventEmitter<any> = new EventEmitter(false);

    toggleLike() {
        this.handleToggleLike.emit();
    }

    delete() {
        if (confirm('delete?')) {
            this.handleDelete.emit();
        }
    }
}
