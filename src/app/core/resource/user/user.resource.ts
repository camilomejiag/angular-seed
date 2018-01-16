import {Injectable} from '@angular/core';
import {User} from '../../model/user/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserResource {

  constructor() {
  }

  public getUser(user: User): Observable<User> {
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser: User = user;
    if (users.length > 0) {
      for (const actualUser in users) {
        if (users[actualUser].email === currentUser.email && users[actualUser].password === currentUser.password) {
          localStorage.setItem('currentUser', JSON.stringify(users[actualUser]));
          return (Observable.of(users[actualUser]));
        }
      }
      return (Observable.throw(new Error('Email/Password Not Valid')));
    } else {
      return (Observable.throw(new Error('User Doesn`t Exist ')));
    }
  }

  logoutUser(): Observable<any> {
    localStorage.removeItem('currentUser');
    return (Observable.of('Logged out'));
  }

  public registerUser(user: User): Observable<User> {
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    const newUser: User = user;
    let existingUser = false;
    if (users.length > 0) {
      for (const actualUser in users) {
        if (users[actualUser].email === newUser.email) {
          existingUser = true;
        }
      }
      if (existingUser) {
        return (Observable.throw(new Error('User Duplicated')));
      }
    }
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return (Observable.of(newUser));
  }

  public checkAuthenticated(): Observable<User> {
    const currentUser: User = JSON.parse(localStorage.getItem('currentUser')) || undefined;
    return (Observable.of(currentUser));
  }

}
