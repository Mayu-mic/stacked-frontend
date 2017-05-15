import { TsuramisService } from './services/TsuramisService';
import { TsuramiEffects } from './effects/tsuramis';
import { HttpModule } from '@angular/http';
import { TsuramiContainerHeader } from './components/TsuramiContainerHeader';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';
import {store} from './reducers';

import {AppComponent} from './containers/App';
import {HeaderComponent} from './components/Header';

import { TsuramiItemComponent } from './components/TsuramiItem';
import { MainSectionComponent } from './components/MainSection';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EffectsModule } from '@ngrx/effects';

import { Angular2TokenService } from 'angular2-token';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    store,
    EffectsModule.run(TsuramiEffects),
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    RootComponent,
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    TsuramiItemComponent,
    TsuramiContainerHeader
  ],
  providers: [
    Angular2TokenService,
    TsuramisService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
