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
    @Input() owned: boolean;
    @Output() handleLike: EventEmitter<number> = new EventEmitter(false);
    @Output() handleEdit: EventEmitter<any> = new EventEmitter(false);

    like(e: Event) {
        e.preventDefault();
        this.handleLike.emit(this.stack.id);
    }

    edit(e: Event) {
        e.preventDefault();
        this.handleEdit.emit();
    }
}
