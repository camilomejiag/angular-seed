import {Injectable} from '@angular/core';
import {VimeoConstants} from '../../../commons/constant/vimeo.constants';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video.model';
import {Category} from '../../model/category.model';
import {DomSanitizer} from "@angular/platform-browser";

@Injectable()
export class VideoResource {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  public getVideosByCategory(category): Observable<Video[]> {
    return this.http.get(`${VimeoConstants.vimeoUrl}${category}/videos`).map((response: any) => {
      const video: Video[] = [];
      response.data.forEach(item => {
        video.push(new Video(item.user.name, item.pictures.uri, this.sanitizer.bypassSecurityTrustHtml(item.embed.html), item.created_time, item.description, item.name, item.uri));
      });
      return video;
    });
  }

  public getVideoById(videoId: number): Observable<Video> {
    return this.http.get(`${VimeoConstants.vimeoUrl}${videoId}`).map((response: any) => {
      const dto = response;
      return new Video(dto.user.name, dto.pictures.uri, this.toSafe(dto.embed.html), dto.created_time, dto.description, dto.name, dto.uri);
    });
  }

  // Still need to be done
  public getVideoComments(videoUri) {
    return this.http.get(`${VimeoConstants.vimeoUrl + videoUri}/comments`).map((response: any) => {
      return response.data;
    });
  }

  public getRelatedVideos(video: Video): Observable<Video[]> {
    return this.http.get(`${VimeoConstants.vimeoUrl + video.uri}/videos?filter=related`).map((response: any) => {
      const relatedVideos: Video[] = [];
      response.data.forEach(item => {
        relatedVideos.push(new Video(item.user.name, item.pictures.uri, this.sanitizer.bypassSecurityTrustHtml(item.embed.html), item.created_time, item.description, item.name, item.uri));
      });
      return relatedVideos;
    });
  }

  private toSafe(link) {
    return this.sanitizer.bypassSecurityTrustHtml(link);
  }
}
