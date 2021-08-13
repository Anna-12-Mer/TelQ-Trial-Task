import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesTestService } from '../services/countries-test.service';
// using Swal alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  selectedCountryNames: any = [];
  selectedCountries: any = []
  countries: any = [];

  @Output() countriesEvent = new EventEmitter();


  constructor(private countriesTestService: CountriesTestService) {
    //** INIT */
    this.getAllCountries()
  }

  ngOnInit(): void {
  }
  //** Get Countries */
  getAllCountries() {
    this.countriesTestService.getAllCountries().subscribe((data: any) => {
      this.countries = data;
    })
  }
  //** Get all selected countries */
  selectedCountriesItem(event: any) {
    event.target.value.forEach((element: string) => {
      this.selectedCountryNames = element
    });
  }

  //** Submit button */
  tests() {
    // if the selectedCountryNames array is not empty
    if (this.selectedCountryNames.length !== 0) {
      let body: any = {};
      this.selectedCountryNames.forEach((country: string) => {
        body.countryName = country;
        this.selectedCountries.push(body)
        body = {};
      });
      // Call the EP 'sendData' from the service
      this.countriesTestService.sendData(this.selectedCountries).subscribe((res: any) => {
        // Sending data from the child to the parent (root) using the @output decorator
        this.countriesEvent.emit(res);
      }, (error: any) => {
        console.log('error', error);
      });
    } else {
      // show an error message
      Swal.fire(
        'Please, you have to choose at least one country',
        '',
        'info'
      )
    }
    this.selectedCountries = []
  }
}
