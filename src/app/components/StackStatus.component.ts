import { StackStatus } from '../models/StackStatus';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'stack-status-component',
    template: require('./StackStatus.component.html')
})
export class StackStatusComponent {
    @Input() status: StackStatus;
    @Output() handleChange: EventEmitter<StackStatus> = new EventEmitter(false);
    @Output() handleDelete: EventEmitter<any> = new EventEmitter(false);

    changeStatus(status: StackStatus) {
        if (this.status !== status) {
            this.handleChange.emit(status);
        }
    }

    delete() {
        this.handleDelete.emit();
    }
}
