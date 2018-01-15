import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {CategoryResource} from '../../resource/category/category.resource';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../model/category.model';

@Injectable()
export class CategoryService {

  constructor(public categoryResource: CategoryResource) {
  }

  public getCategories(): Observable<Category[]> {
    return this.categoryResource.getCategories();
  }
}
