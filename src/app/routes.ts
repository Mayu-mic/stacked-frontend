import { StacksPage } from './pages/stacks.page';
import { IndexPage } from './pages/Index.page';
import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OAuthCallbackPage } from './pages/OAuthCallback.page';

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
    path: 'oauth_callback',
    component: OAuthCallbackPage,
  },
  {
    path: 'stacks/:stackId',
    component: StacksPage
  },
];

export const routing = RouterModule.forRoot(routes);
