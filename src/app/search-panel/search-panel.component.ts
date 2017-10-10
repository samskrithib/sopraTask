import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyDataService } from './../services/my-data.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent {
  // public adults;
  // public children;
  airportCtrl: FormControl;
  selectedValue = 1;
  adults = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  children = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  bookingTypes = ['One way', 'Return'];
  selectedBookingType: string;
  fromAirports: any;
  departingAirports: any;
  selectedFrom: string;
  selectedTo: string;
  filteredAirports: any;

  constructor(private dataService: MyDataService, private router: Router) {
    this.dataService.fetchOverseasAirports().subscribe( data => {
      this.departingAirports = data;
    });
    this.dataService.fetchUkAirports().subscribe(data => {
      console.log(data)
      this.fromAirports = data;

      this.airportCtrl = new FormControl();
      this.filteredAirports = this.airportCtrl.valueChanges
        .startWith(null)
        .map(airport => {
          console.log(this.filteredAirports(airport))
          airport ? this.filteredAirports(airport) : this.fromAirports.slice();
        });
    });
  }
  filterAirports(name: string) {
    return this.fromAirports.filter(airport =>
      airport.Name.toLowerCase().indexOf(name.toLowerCase()) === 0    );
  }


 submit() {
    console.log();
    this.router.navigate(['./searchResults']);
 }

}
