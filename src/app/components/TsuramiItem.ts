import { Tsurami } from '../models/Tsurami';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'tsurami-item',
    template: require('./TsuramiItem.html')
})
export class TsuramiItemComponent {
    @Input() tsurami: Tsurami;
    @Output() onSorenaClick: EventEmitter<number> = new EventEmitter(false);
    @Output() onToProgressClick: EventEmitter<number> = new EventEmitter(false);
    @Output() onToResolvedClick: EventEmitter<number> = new EventEmitter(false);
    @Output() onToPendingClick: EventEmitter<number> = new EventEmitter(false);

    handleSorenaClick() {
        this.onSorenaClick.emit(this.tsurami.id);
    }

    handleToProgressClick() {
        this.onToProgressClick.emit(this.tsurami.id);
    }

    handleToResolvedClick() {
        this.onToResolvedClick.emit(this.tsurami.id);
    }

    handleToPendingClick() {
        this.onToPendingClick.emit(this.tsurami.id);
    }
}
