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
  }
}
