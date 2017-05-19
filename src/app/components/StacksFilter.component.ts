import { StacksFilter } from '../models/StacksFilter';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'stacks-filter-component',
    template: require('./StacksFilter.component.html')
})
export class StacksFilterComponent {
    @Input() selected: StacksFilter;
    @Output() handleSelect: EventEmitter<StacksFilter> = new EventEmitter(false);

    select(selected: StacksFilter) {
        this.handleSelect.emit(selected);
    }
}
