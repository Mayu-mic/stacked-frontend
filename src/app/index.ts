import { StacksFilterComponent } from './components/StacksFilter.component';
import { RequestUserInfoAction } from './actions/user';
import { Store } from '@ngrx/store';
import { CommentsContainer } from './containers/Comments.container';
import { StacksContainer } from './containers/Stacks.container';
import { RootPage } from './pages/Root.page';
import { StackEditFormComponent } from './components/StackEditForm.component';
import { CommentFormComponent } from './components/CommentForm.component';
import { CommentEffects } from './effects/comment';
import { CommentItemComponent } from './components/CommentItem.component';
import { StackEffects } from './effects/stack';
import { StackContainer } from './containers/Stack.container';
import { StacksPage } from './pages/Stacks.page';
import { IndexPage } from './pages/Index.page';
import { StackComponent } from './components/Stack.component';
import { StacksEffects } from './effects/stacks';
import { UserEffects } from './effects/user';
import { RouterModule } from '@angular/router';
import { StackedListService } from './services/StackedListService';
import { ListsEffects } from './effects/lists';
import { FooterComponent } from './components/Footer.component';
import { HeaderComponent } from './components/Header.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './routes';
import {store} from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MarkdownModule } from 'angular2-markdown';

import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Angular2TokenService } from 'angular2-token';
import { OAuthCallbackPage } from './pages/OAuthCallback.page';
import { StackCreateFormComponent } from './components/StackCreateForm.component';
import { StackMenuComponent } from './components/StackMenu.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing,
    store,
    EffectsModule.run(UserEffects),
    EffectsModule.run(ListsEffects),
    EffectsModule.run(StacksEffects),
    EffectsModule.run(StackEffects),
    EffectsModule.run(CommentEffects),
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  declarations: [
    RootPage,
    IndexPage,
    StacksPage,
    OAuthCallbackPage,

    StacksContainer,
    StackContainer,
    CommentsContainer,

    HeaderComponent,
    FooterComponent,
    StackComponent,
    StackCreateFormComponent,
    CommentItemComponent,
    CommentFormComponent,
    StackEditFormComponent,
    StackMenuComponent,
    StacksFilterComponent,
  ],
  providers: [
    Angular2TokenService,
    StackedListService,
  ],
  bootstrap: [RootPage]
})
export class AppModule {
  constructor(
    private tokenService: Angular2TokenService,
    private store: Store<any>,
  ) {
    tokenService.init({
      apiBase: process.env.API_BASE,
      oAuthBase: process.env.API_BASE,
      oAuthWindowType: 'sameWindow',
    });

    this.store.dispatch(new RequestUserInfoAction());
  }
}
