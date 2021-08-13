import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesTestService } from '../services/countries-test.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  selectedCountryNames: any = {};
  selectedCountries : any = []
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
    event.target.value.forEach((element: string ) => {
      this.selectedCountryNames.countryName = event.target.value
    });
  }

  //** Submit button */
  tests() {
    let body : any = {};
    this.selectedCountryNames.forEach((country :string) => {
      body.countryName= country;
      this.selectedCountries.push(body)
      body= {};
    });
    // Call the EP from the service
    this.countriesTestService.sendData(this.selectedCountries).subscribe((res : any)=>{
      // Sending data from the child to the parent (root)
      this.countriesEvent.emit(res);
    },(error : any)=>{
      console.log(error);
    });
   }
}
