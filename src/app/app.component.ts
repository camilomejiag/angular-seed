import {Component, OnInit} from '@angular/core';
import {VideoService} from './core/service/video/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public _VideoService: VideoService) {

  }

  ngOnInit(): void {
    this._VideoService.getStories();
  }
}
