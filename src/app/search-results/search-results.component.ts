import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyDataService } from './../services/my-data.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsComponent implements OnInit {
  OutResults: ResultStructure[];
  RtnResults: ResultStructure[];
  constructor(private dataService: MyDataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'Outbound',
        sanitizer.bypassSecurityTrustResourceUrl('./../assets/OutF.svg'));
    iconRegistry.addSvgIcon(
      'Rtn',
      sanitizer.bypassSecurityTrustResourceUrl('./../assets/airport.svg'));
  }

  ngOnInit() {
    this.dataService.fetchSearchResults().subscribe(searchResults => {
      console.log(searchResults);
      this.OutResults = searchResults.out;
      this.RtnResults = searchResults.rtn;
    });
  }

}

interface ResultStructure {
  Type: string;
  FromCode: string;
  FromName: string;
  ToCode: string;
  ToName: string;
  DepartureDate: any;
  DepartureTime: any;
  ArrivalDate: any;
  ArrivalTime: any;
  Airline: any;
  AirlineCode: number;
  Price: number;
  FlightDuration: any;
}
