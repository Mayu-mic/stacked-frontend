import { StackStatus } from '../models/StackStatus';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'stack-menu-component',
    template: require('./StackMenu.component.html')
})
export class StackMenuComponent {
    @Input() status: StackStatus;
    @Input() canEdit: boolean;
    @Output() handleChange: EventEmitter<StackStatus> = new EventEmitter(false);
    @Output() handleDelete: EventEmitter<any> = new EventEmitter(false);
    @Output() handleEdit: EventEmitter<any> = new EventEmitter(false);

    changeStatus(status: StackStatus) {
        if (this.status !== status) {
            this.handleChange.emit(status);
        }
    }

    delete() {
        this.handleDelete.emit();
    }

    edit() {
        this.handleEdit.emit();
    }
}
