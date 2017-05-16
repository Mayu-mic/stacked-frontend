import { StackFormComponent } from './components/StackForm.component';
import { StackComponent } from './components/Stack.component';
import { StacksEffects } from './effects/stacks';
import { UserEffects } from './effects/user';
import { RouterModule } from '@angular/router';
import { StackedListService } from './services/StackedListService';
import { ListsEffects } from './effects/lists';
import { ListsComponent } from './components/Lists.component';
import { MainSectionComponent } from './components/MainSection.component';
import { FooterComponent } from './components/Footer.component';
import { HeaderComponent } from './components/Header.component';
import { HttpModule } from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routing, RootComponent} from './routes';
import {store} from './reducers';

import {AppComponent} from './containers/App';

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
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    RootComponent,
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
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
