import { Injectable } from '@angular/core';
import {AuthenticationService} from './users/authentication.service';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import {BaseModel, IBaseModel} from './models/base.model';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends BaseModel, U extends IBaseModel> {

  protected constructor(
    public http: HttpClient,
    public authentication: AuthenticationService,
  ) { }

  get(id: number): Promise<T> {
    return this.http.get<U>(this.getRoute() + id + '/', this.getHeaders()).toPromise()
      .then((res: U) => {
        const CLASS = this.getEntityModel();
        return new CLASS(res);
      });
  }

  getAll(): Promise<Array<T>> {
    return this.http.get<Array<U>>(this.getRoute(), this.getHeaders()).toPromise()
      .then((res: Array<U>) => {
        return _.map(res, shop => {
          const CLASS = this.getEntityModel();
          return new CLASS(shop);
        });
      });
  }

  create(shop: T): Promise<U> {
    return this.http.post<U>(this.getRoute(), shop.toObject(), this.getHeaders()).toPromise();
  }

  abstract getEntityModel(): any;

  abstract getRoute(): string;

  private getHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.authentication.loginData.accessToken}`,
      }
    };
  }
}
