import {Component, OnInit} from '@angular/core';
import {VideoService} from './core/service/video/video.service';
import {CategoryService} from './core/service/category/category.service';
import {Category} from './core/model/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    // this.categoryService.getCategories().subscribe((e: Category[]) =>
    //   this.videoService.getVideosByCategory(e[0]).subscribe(d =>
    //     this.videoService.getRelatedVideos(d[0]).subscribe(f => console.log(f))
    //   ));
     // this.videoService.getVideo();
    // this.videoService.getVideoComments();
    // this.videoService.getRelatedVideos('videos/47513706');
  }
}
