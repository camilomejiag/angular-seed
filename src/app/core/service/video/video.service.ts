import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {VideoResource} from '../../resource/video/video.resource';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video.model';
import {Category} from '../../model/category.model';

@Injectable()
export class VideoService {

  constructor(public videoResource: VideoResource) {
  }

  public getVideosByCategory(category): Observable<Video[]> {
    return this.videoResource.getVideosByCategory(category);
  }

  public getVideoById(videoId): Observable<Video> {
    return this.videoResource.getVideoById(videoId);
  }

  public getVideoComments() { // Still not ready
    return this.videoResource.getVideoComments('47513706').subscribe(e => console.log(e));
  }

  public getRelatedVideos(video: Video): Observable<Video[]> {
    return this.videoResource.getRelatedVideos(video);
  }
}
