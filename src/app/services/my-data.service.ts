import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private _http: Http) { }
  fetchUkAirports() {
    return this._http.get('./../assets/UKAirports.json')
      .map(data => data.json());
  }

  fetchOverseasAirports() {
    return this._http.get('./../assets/OverseasAirports.json')
      .map(data => data.json());
  }
  fetchSearchResults() {
    return this._http.get('./../assets/searchResults.json')
      .map(data => data.json());
  }
}
