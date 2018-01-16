import {DashboardComponent} from './dashboard.component';
import {VideoService} from '../../core/service/video/video.service';
import {Transition} from '@uirouter/angular/lib';

export const state = {
  name: 'home.dashboard',
  url: '/dashboard/:category?',
  data: {
    authorization: 'logged'
  },
  views: {
    'content@': {
      component: DashboardComponent
    }
  },
  params: {
    category: 'animation'
  },
  resolve: [
    {
      token: 'videos',
      deps: [VideoService, Transition],
      resolveFn: (VideoSvc: VideoService, transition: Transition) => {
        return VideoSvc.getVideosByCategory(transition.params().category).toPromise().then(data => {
          console.log(data);
          return data;
        });
      }
    }
  ]
};
