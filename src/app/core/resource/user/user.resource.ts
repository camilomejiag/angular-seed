import {Injectable} from '@angular/core';
import {User} from '../../model/user/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserResource {

  constructor() {
  }

  public getUser(user: User): Observable<User> {
    const email = localStorage.getItem('Email');
    const password = localStorage.getItem('Password');
    const firstName = localStorage.getItem('FirstName');
    const lastName = localStorage.getItem('LastName');
    const middleName = localStorage.getItem('middleName');
    const returnUser = new User(email, password, firstName, lastName, middleName);
    return (Observable.of(returnUser));
  }

  public registerUser(user: User): Observable<User> {
    localStorage.setItem('Email', user.email);
    localStorage.setItem('Password', user.password);
    localStorage.setItem('FirstName', user.firstName);
    localStorage.setItem('LastName', user.lastName);
    localStorage.setItem('middleName', user.middleName);
    return (Observable.of(user));
  }

}
