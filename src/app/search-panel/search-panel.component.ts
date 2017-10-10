import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MyDataService} from './../services/my-data.service';
import {Router} from '@angular/router';
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
  selectedValue = 1;
  adults = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  children = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  bookingTypes = ['One way', 'Return'];
  selectedBookingType: string;
  departingAirports: AirportObj[];
  selectedFrom: string;
  selectedTo: string;
  airportCtrl: FormControl;
  filteredAirports: Observable<any[]>;

  fromAirports: AirportObj[];


  constructor(private dataService: MyDataService, private router: Router) {
    this.dataService.fetchOverseasAirports().subscribe(res => {
      this.departingAirports = res.data;
    });

    // UKAiports
    this.airportCtrl = new FormControl();
    this.dataService.fetchUkAirports().subscribe(res => {
      this.fromAirports = res.data;
      // console.log("fromA", this.fromAirports)
      this.filteredAirports = this.airportCtrl.valueChanges
        .startWith(null)
        .map(airport => airport ? this.filterAirports(airport) : this.fromAirports.slice());
    });
  }

  filterAirports(name: string) {
    return this.fromAirports.filter((airport) =>
      airport.Name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  submit() {
    this.router.navigate(['./searchResults']);
  }

}


interface AirportObj {
  Code: string;
  Name: string;
  Group: string;
  Location: string;
  Country: string;
}
