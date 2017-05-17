import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/User';
import { Component, OnInit } from '@angular/core';
import * as fromUser from '../actions/user';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class RootPage {}
