import {VideoComponent} from './video.component';
import {VideoService} from "../../core/service/video/video.service";
import {Transition} from "@uirouter/angular/lib";

export const state = {
  name: 'home.video',
  url: '/video/:id',
  component: VideoComponent,
  resolve: [
    {
      token: 'video',
      deps: [VideoService, Transition],
      resolveFn: (VideoSvc: VideoService, transition: Transition) => {
        return VideoSvc.getVideoById(transition.params().id).toPromise();
      }
    }
  ]
};
