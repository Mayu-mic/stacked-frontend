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

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EffectsModule } from '@ngrx/effects';

import { Angular2TokenService } from 'angular2-token';

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
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    RootComponent,

    IndexPage,
    StacksPage,

    MainSectionContainer,
    StackContainer,

    HeaderComponent,
    ListsComponent,
    FooterComponent,
    StackComponent,
    StackFormComponent
  ],
  providers: [
    Angular2TokenService,
    StackedListService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
