import {Component, OnInit} from '@angular/core';
import {Category} from '../../../core/model/category.model';
import {CategoryService} from '../../../core/service/category/category.service';
import {UserService} from "../../../core/service/user/user.service";
import {StateService} from "@uirouter/core/lib";
import {User} from "../../../core/model/user/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories: Category[] = [];
  User: User;

  constructor(public categoryService: CategoryService, public userService: UserService, public stateService: StateService) {
  }

  ngOnInit() {
    this.userService.checkAuthenticated().subscribe(user => {
      this.User = user;
    });

    this.categoryService.getCategories().subscribe((response: Category[]) => {
        response.forEach(item => {
          this.categories.push(new Category(item.uri, item.name, item.link));
        });
      }
    );
  }

  logoutUser(): void {
    this.userService.logoutUser().subscribe(response => {
      alert(response);
      this.stateService.go('login');
    });
  }
}
