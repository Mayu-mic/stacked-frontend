import { Angular2TokenService } from 'angular2-token';
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
    user$: Observable<User>;
    currentUser: User;

    constructor(private store: Store<any>) {
      this.user$ = store.select('user');
      this.user$.subscribe(user => this.currentUser = user);
    }

    loginClick() {
        this.store.dispatch(new fromUser.RequestLoginAction());
    }

    logoutClick() {
        this.store.dispatch(new fromUser.RequestLogoutAction());
    }

    ngOnInit(): void {
        this.store.dispatch(new fromUser.RequestUserInfoAction());
    }
}
