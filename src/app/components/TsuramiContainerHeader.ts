import { Order } from '../models/Order';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Visibility } from '../models/Visibility';

@Component({
    selector: 'tsurami-container-header',
    template: require('./TsuramiContainerHeader.html')
})
export class TsuramiContainerHeader {
    @Output() onOrderSelect: EventEmitter<Order> = new EventEmitter(false);
    @Output() onVisibilitySelect: EventEmitter<Visibility> = new EventEmitter(false);
    @Input() selectedOrder: Observable<Order>;
    @Input() selectedVisibility: Observable<Visibility>;

    orderTypes = [
        Order.SORENA_DESC,
        Order.SORENA_ASC,
        Order.CREATED_AT_DESC,
        Order.CREATED_AT_ASC,
        ];
    orderTitles = {
        [Order.SORENA_DESC]: 'それなの多い順',
        [Order.SORENA_ASC]: 'それなの少ない順',
        [Order.CREATED_AT_DESC]: '登録日順が新しい順',
        [Order.CREATED_AT_ASC]: '登録日が古い順',
    };

    visibilityTypes = [
        Visibility.SHOW_ALL,
        Visibility.SHOW_ACTIVE,
        Visibility.SHOW_RESOLVED,
        ];
    visibilityTitles = {
        [Visibility.SHOW_ALL]: '全て表示',
        [Visibility.SHOW_ACTIVE]: '解決していないつらみのみ表示',
        [Visibility.SHOW_RESOLVED]: '解決済みのつらみのみ表示',
    };

    handleOrderSelect(order: Order) {
        this.onOrderSelect.emit(order);
    }

    handleVisibilitySelect(visibility: Visibility) {
        this.onVisibilitySelect.emit(visibility);
    }
}
