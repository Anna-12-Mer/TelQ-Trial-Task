import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';

const _url = 'https://interview.telqtele.com/'

@Injectable({
  providedIn: 'root'
})
export class CountriesTestService {

  constructor(private http: HttpClient) {

    //** update the list of countries every 30 seconds */
    interval(3000).subscribe(() => {
      this.getAllCountries()
    });
  }

  //** Get All Countries */
  getAllCountries(): Observable<any> {
    return this.http.get(_url + 'countries');
  }
  //** Post --  test endpoint */
  sendData(data: any): Observable<any> {
    return this.http.post(_url + 'test', data);
  }
}
