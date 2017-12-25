import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResource } from './resource/user/user.resource';
import { UserService } from './service/user/user.service';
import { VideoService } from './service/video/video.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UserResource, UserService, VideoService]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
