import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './containers/App';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: ':page',
    component: AppComponent
  }
];

export const routing = RouterModule.forRoot(routes);
