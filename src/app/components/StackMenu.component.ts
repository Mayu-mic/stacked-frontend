import { StackStatus } from '../models/StackStatus';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'stack-menu-component',
    template: require('./StackMenu.component.html')
})
export class StackMenuComponent {
    @Input() status: StackStatus;
    @Input() enabled: boolean;
    @Input() canEdit: boolean;
    @Input() canChangeStatus: boolean;
    @Input() canDelete: boolean;
    @Output() handleChange: EventEmitter<StackStatus> = new EventEmitter(false);
    @Output() handleDelete: EventEmitter<any> = new EventEmitter(false);
    @Output() handleEdit: EventEmitter<any> = new EventEmitter(false);

    changeStatus(status: StackStatus) {
        if (this.status !== status) {
            this.handleChange.emit(status);
        }
    }

    edit() {
        this.handleEdit.emit();
    }

    delete() {
        if (confirm('delete?')) {
            this.handleDelete.emit();
        }
    }
}
