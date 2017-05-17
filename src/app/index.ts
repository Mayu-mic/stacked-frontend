import { CommentEffects } from './effects/comment';
import { CommentItemComponent } from './components/CommentItem.component';
import { StackEffects } from './effects/stack';
import { StackContainer } from './containers/Stack.container';
import { MainSectionContainer } from './containers/MainSection.container';
import { StacksPage } from './pages/stacks.page';
import { IndexPage } from './pages/Index.page';
import { StackFormComponent } from './components/StackForm.component';
import { StackComponent } from './components/Stack.component';
import { StacksEffects } from './effects/stacks';
import { UserEffects } from './effects/user';
import { RouterModule } from '@angular/router';
import { StackedListService } from './services/StackedListService';
import { ListsEffects } from './effects/lists';
import { ListsComponent } from './components/Lists.component';
import { FooterComponent } from './components/Footer.component';
import { HeaderComponent } from './components/Header.component';
import { HttpModule } from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routing, RootComponent} from './routes';
import {store} from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EffectsModule } from '@ngrx/effects';

import { Angular2TokenService } from 'angular2-token';
import { OAuthCallbackPage } from './pages/OAuthCallback.page';
import { CommentsContainer } from './containers/Comments.container';

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
    BsDropdownModule.forRoot(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  declarations: [
    RootComponent,

    IndexPage,
    StacksPage,
    OAuthCallbackPage,

    MainSectionContainer,
    StackContainer,
    CommentsContainer,

    HeaderComponent,
    ListsComponent,
    FooterComponent,
    StackComponent,
    StackFormComponent,
    CommentItemComponent,
  ],
  providers: [
    Angular2TokenService,
    StackedListService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
  constructor(private tokenService: Angular2TokenService) {
    tokenService.init({
      apiBase: 'http://localhost:4000',
      oAuthBase: 'http://localhost:4000',
      oAuthWindowType: 'sameWindow',
    });
  }
}
