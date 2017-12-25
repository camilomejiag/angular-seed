import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {uiRouterConfigFn} from './config/router.config';

import {AppComponent} from './app.component';
import {STATES} from './states/states';
import {DashboardComponent} from './states/dashboard/dashboard.component';
import {UsersComponent} from './states/users/users.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn
    }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Angular Project';
}
