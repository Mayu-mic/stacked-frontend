import { ActivatedRoute, Router } from '@angular/router';
import { Visibility } from '../models/Visibility';
import { TsuramisService } from '../services/TsuramisService';
import { Tsurami } from '../models/Tsurami';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import * as fromTsuramis from '../actions/tsuramis';
import * as fromTsurami from '../actions/tsurami';
import { Status } from '../models/Status';
import { Order } from '../models/Order';


interface RouteParams {
    page: number;
}

@Component({
  selector: 'tsurami-main-section',
  template: require('./MainSection.html'),
  providers: [TsuramisService]
})
export class MainSectionComponent implements OnInit {
    tsuramis$: Observable<Tsurami[]>;
    visibility$: Observable<Visibility>;
    order$: Observable<Order>;

    selectedVisibility: Visibility;
    selectedOrder: Order;
    currentPage: number;

    nextPageLink: string;
    previousPageLink: string;

    constructor(
        private tsuramisService: TsuramisService,
        public store: Store<any>,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.tsuramis$ = store.select('tsuramis');
        this.visibility$ = store.select('visibility');
        this.order$ = store.select('order');

        this.visibility$.subscribe(visibility => this.selectedVisibility = visibility);
        this.order$.subscribe(order => this.selectedOrder = order);

    }

  ngOnInit() {
      this.route.params
        .subscribe((p: RouteParams) => {
            this.currentPage = p.page ? p.page : 1;
            this.nextPageLink = `/${+this.currentPage + 1}`;
            this.previousPageLink = this.currentPage > 1 ? `/${+this.currentPage - 1}` : null;
            this.store.dispatch(new fromTsuramis.RequestAction(this.currentPage));
        });
  }

  handleSorena(id: number) {
      this.store.dispatch(new fromTsurami.AddSorenaAction(id));
  }

  handleStatusChange(id: number, status: Status) {
      this.store.dispatch(new fromTsurami.ChangeStatusAction(status, id));
  }

  handleChangeVisibility(visibility: Visibility) {
      this.store.dispatch(new fromTsuramis.ChangeVisibilityAction(visibility, this.currentPage, this.selectedOrder));
  }

  handleOrder(order: Order) {
      this.store.dispatch(new fromTsuramis.ChangeOrderAction(order, this.currentPage, this.selectedVisibility));
  }
}
