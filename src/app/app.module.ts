import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {uiRouterConfigFn} from './config/router.config';

import {AppComponent} from './app.component';
import {STATES} from './states/states';
import {DashboardComponent} from './states/dashboard/dashboard.component';
import {CoreModule} from './core/core.module';
import { NavbarComponent } from './commons/components/navbar/navbar.component';
import {LoginComponent} from './states/login/login.component';
import {RegisterComponent} from './states/register/register.component';
import {VideoComponent} from './states/video/video.component';
import {SafePipe} from './commons/pipe/safe-pipe';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarComponent} from './commons/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    VideoComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn
    }),
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Angular Project';
}
