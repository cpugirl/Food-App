import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Foods } from '../../models/foods'
/*
  Generated class for the NdbFoodsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NdbFoodsProvider {
 ndbApiUrl = 'https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=EmumQzsZBpK0Kxnre5QjPJeyxr4BA8MkoU8DhjqO';
 //githubApiUrl = 'https://api.github.com';
  constructor(public http: Http) {
    console.log('Hello NdbFoodsProvider Provider');
  }
    load(): Observable<Foods[]> {
    return this.http.get(`${this.ndbApiUrl}`)
      .map(res => <Foods[]>res.json());
  }
}
