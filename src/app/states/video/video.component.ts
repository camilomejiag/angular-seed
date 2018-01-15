import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: Video;

  constructor() {

  }

  ngOnInit() {
    console.log(this.video);
  }

}
