import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/service/user/user.service";
import {StateService} from "@uirouter/core/lib";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(public _userService: UserService, public _stateService: StateService) {
  }

  ngOnInit() {
  }

  login() {
    this._userService.getUser(this.user).subscribe(() => {
      alert('Logged in successfully!');
      this._stateService.go('home.dashboard');
    }, error => {
      alert(error);
    });
  }

}
