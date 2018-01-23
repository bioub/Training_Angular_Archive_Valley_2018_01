import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    /* Older way to call operator < rxjs 5.5
    this.httpClient.get('https://swapi.co/api/people')
      .map((data) => data.results);
      */

    return this.httpClient.get<any>(`/users`);
      // .pipe(
      //   map((data) => data.results),
      // );
  }

  getById(id) {
    return this.httpClient.get<any>(`/users/${id}`);
  }
}
