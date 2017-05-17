import { StacksPage } from './pages/stacks.page';
import { IndexPage } from './pages/Index.page';
import { RouterModule, Routes } from '@angular/router';
import { OAuthCallbackPage } from './pages/OAuthCallback.page';

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
