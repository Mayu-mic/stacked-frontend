import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stack } from '../models/Stack';

@Component({
    selector: 'stack-component',
    template: require('./Stack.component.html')
})
export class StackComponent {
    @Input() stack: Stack;
    @Input() stackNo: number;
    @Output() handleLike: EventEmitter<number> = new EventEmitter(false);

    like(e: Event) {
        e.preventDefault();
        this.handleLike.emit(this.stack.id);
    }
}
