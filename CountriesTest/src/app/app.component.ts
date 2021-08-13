import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountriesTest';
  countries: any;

  getCountries(countries: any) {
    this.countries = countries;
  }
}
