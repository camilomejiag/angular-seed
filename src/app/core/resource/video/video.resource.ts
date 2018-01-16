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

  public uriFactory(uri) {
    return uri.substr(uri.lastIndexOf('/') + 1, uri.length);
  }

  public getVideosByCategory(category): Observable<Video[]> {
    console.log(category)
    return this.http.get(`${VimeoConstants.vimeoUrl}/categories/${category}/videos`).map((response: any) => {
      const video: Video[] = [];
      response.data.forEach(item => {
        video.push(this.dtoToModel(item));
      });
      return video;
    });
  }

  public getVideoById(videoId: number): Observable<Video> {
    return this.http.get(`${VimeoConstants.vimeoUrl}/videos/${videoId}`).map((response: any) => {
      const dto = response;
      return this.dtoToModel(dto);
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
        relatedVideos.push(this.dtoToModel(item));
      });
      return relatedVideos;
    });
  }

  private toSafe(link) {
    return this.sanitizer.bypassSecurityTrustHtml(link);
  }

  private toSafeImg(link) {
    return this.sanitizer.bypassSecurityTrustUrl(link);
  }

  private dtoToModel(dto: any): Video {
    return new Video(dto.user.name, this.toSafeImg(dto.pictures.sizes[0].link), this.toSafe(dto.embed.html), dto.created_time, dto.description, dto.name, dto.uri.substr(dto.uri.lastIndexOf('/') + 1, dto.uri.length));
  }
}
