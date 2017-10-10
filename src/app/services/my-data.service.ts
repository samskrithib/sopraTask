import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private _http: Http) { }
  fetchUkAirports() {
    return this._http.get('http://localhost:3000/api/ukairports')
      .map(data => data.json());
  }

  fetchOverseasAirports() {
    return this._http.get('http://localhost:3000/api/overseasAirports')
      .map(data => data.json());
  }
  fetchSearchResults() {
    return this._http.get('http://localhost:3000/api/searchResults')
      .map(res => res.json());
  }
}
