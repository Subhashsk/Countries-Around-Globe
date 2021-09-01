import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesHttpService {

  public baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(public _http: HttpClient) {
    console.log("service constructor is called.")
  }

  // method to get all countries
  public getAllCountries(regionName: string | null): any {
    let myResponse = this._http.get(this.baseUrl + '/region' + '/' + regionName)
    return myResponse;

  }

  //method to get single country details
  public getSingleCountryDetails(countryName: string | null): any {
    let myResponse = this._http.get(this.baseUrl + '/name' + '/' + countryName + '?fullText=true')
    return myResponse;
  }

  // method to get all countries with common currency
  public getAllCountriesByCurrency(currencyCode: string | null): any {
    let myResponse = this._http.get(this.baseUrl + '/currency' + '/' + currencyCode)
    return myResponse;

  }

  // method to get all countries with common language
  public getAllCountriesByLanguage(languageCode: string | null): any {
    let myResponse = this._http.get(this.baseUrl + '/lang' + '/' + languageCode)
    return myResponse;

  }

}
