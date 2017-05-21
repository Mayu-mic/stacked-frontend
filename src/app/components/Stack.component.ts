import { StackStatus } from '../models/StackStatus';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stack } from '../models/Stack';

@Component({
    selector: 'stack-component',
    template: require('./Stack.component.html')
})
export class StackComponent {
    @Input() stack: Stack;
    @Input() stackNo: number;
    @Input() single: boolean;
    @Input() canLike: boolean;
    @Input() canEdit: boolean;
    @Input() canDelete: boolean;
    @Input() canChangeStatus: boolean;
    @Output() handleToggleLike: EventEmitter<any> = new EventEmitter(false);
    @Output() handleEdit: EventEmitter<any> = new EventEmitter(false);
    @Output() handleDelete: EventEmitter<any> = new EventEmitter(false);
    @Output() handleStatusChange: EventEmitter<StackStatus> = new EventEmitter(false);

    toggleLike() {
        this.handleToggleLike.emit();
    }

    edit() {
        this.handleEdit.emit();
    }

    delete() {
        this.handleDelete.emit();
    }

    statusChange(value: StackStatus) {
        this.handleStatusChange.emit(value);
    }
}
