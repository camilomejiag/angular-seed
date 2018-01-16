import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from '../../core/service/video/video.service';
import {CategoryService} from '../../core/service/category/category.service';
import {Video} from '../../core/model/video.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() videos: Video[];

  constructor(public videoService: VideoService, public categoryService: CategoryService) {
  }

  ngOnInit() {
console.log(this.videos);
  }
}
