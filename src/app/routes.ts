import { StacksPage } from './pages/stacks.page';
import { IndexPage } from './pages/Index.page';
import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: IndexPage
  },
  {
    path: 'stacks/:stackId',
    component: StacksPage
  },
];

export const routing = RouterModule.forRoot(routes);
