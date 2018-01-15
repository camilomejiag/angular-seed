import {Component, OnInit} from '@angular/core';
import {Category} from '../../../core/model/category.model';
import {CategoryService} from '../../../core/service/category/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories: Category[] = [];

  constructor(public categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((response: Category[]) => {
        response.forEach(item => {
          this.categories.push(new Category(item.uri, item.name, item.link));
        });
      }
    );
  }

}
