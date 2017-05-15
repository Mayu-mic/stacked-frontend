import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { User } from '../models/User';
import { Component, OnInit } from '@angular/core';
import * as fromUser from '../actions/user';

@Component({
    selector: 'header-component',
    template: require('./Header.component.html')
})
export class HeaderComponent implements OnInit {
    currentUser: User;
    user$: Observable<User>;

    constructor(private store: Store<any>) {
      this.user$ = store.select('user');
    }

    loginClick() {
        this.store.dispatch(new fromUser.RequestLoginAction());
    }

    ngOnInit(): void {
        // this.store.dispatch(new fromUser.RequestCheckLoginAction());
      this.user$
        .do(console.log)
        .subscribe(
          res => this.currentUser = res
        );
    }
}
