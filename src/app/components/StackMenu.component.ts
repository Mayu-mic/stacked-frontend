import { StackStatus } from '../models/StackStatus';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'stack-menu-component',
    template: require('./StackMenu.component.html')
})
export class StackMenuComponent {
    @Input() status: StackStatus;
    @Input() canEdit: boolean = true;
    @Input() canChangeStatus: boolean = true;
    @Input() canDelete: boolean = true;
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
