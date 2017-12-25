import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {VimeoConstants} from '../../../commons/constant/vimeo.constants';
import {Http, Response} from '@angular/http';
// import 'rxjs/Rx';

@Injectable()
export class VideoService {

  constructor(private http: Http) {
  }

  public getStories() {
    this.http
      .get(VimeoConstants.ACCESS_TOKEN_URL)
      .subscribe((data: Response) => console.log(data));
  }

}
