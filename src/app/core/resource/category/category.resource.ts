import {Injectable} from '@angular/core';
import {VimeoConstants} from '../../../commons/constant/vimeo.constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../model/category.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryResource {

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get(`${VimeoConstants.vimeoUrl}/categories`).map((response: any) => {
      const categories: Category[] = [];
      response.data.forEach(item => {
        categories.push(new Category(item.uri, item.name, item.link));
      });
      return categories;
    });
  }
}
