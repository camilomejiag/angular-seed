import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/model/user/user.model';
import {UserService} from "../../core/service/user/user.service";
import {StateService} from "@uirouter/core/lib";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {};

  constructor(public _userService: UserService, public _stateService: StateService) {
  }

  ngOnInit() {
  }

  register() {
    this._userService.registerUser(this.user).subscribe((user: User) => {
      this._userService.getUser(user).subscribe(() => {
        this._stateService.go('home.dashboard', {category: 'animation'});
      });
    });

  }

}
