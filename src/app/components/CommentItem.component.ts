import { Component, Input } from '@angular/core';

@Component({
    selector: 'comment-item-component',
    template: require('./CommentItem.component.html')
})
export class CommentItemComponent {
    @Input() comment: Comment;
}
