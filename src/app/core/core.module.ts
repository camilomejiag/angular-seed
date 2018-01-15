import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserResource} from './resource/user/user.resource';
import {UserService} from './service/user/user.service';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {VideoService} from './service/video/video.service';
import {CategoryResource} from './resource/category/category.resource';
import {CategoryService} from './service/category/category.service';
import {VideoResource} from './resource/video/video.resource';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [UserResource, UserService, VideoResource, VideoService, CategoryResource, CategoryService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
