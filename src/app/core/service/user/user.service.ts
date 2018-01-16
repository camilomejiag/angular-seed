import {Injectable} from '@angular/core';
import {UserResource} from "../../resource/user/user.resource";
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user/user.model";

@Injectable()
export class UserService {

  constructor(public userResource: UserResource) {
  }

  public getUser(user: User): Observable<User> {
    return this.userResource.getUser(user);
  }

  public registerUser(user: User): Observable<User> {
    return this.userResource.registerUser(user);
  }

  public checkAuthenticated(): Observable<User> {
    return this.userResource.checkAuthenticated();
  }

  public logoutUser(): Observable<any> {
    return this.userResource.logoutUser();
  }

}
