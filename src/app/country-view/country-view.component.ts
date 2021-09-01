import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestcountriesHttpService } from '../restcountries-http.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {


  public currentCountry: any;
  public allCountries: any;
  constructor(private _route: ActivatedRoute, private router: Router, public _http: RestcountriesHttpService) {
    console.log("Country View constructor called.")
  }

  ngOnInit() {

    // to get single country details
    let country_name = this._route.snapshot.paramMap.get('country.name');
    console.log(country_name);

    this._http.getSingleCountryDetails(country_name).subscribe(

      (data: any) => {
        console.log(data);
        this.currentCountry = data;
        // console.log(this.currentCountry.name); // resulting into undefined
      },
      (error: { errorMessage: any; }) => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )


    // to get countries of same currency
    let currency_code = this._route.snapshot.paramMap.get('currencyCode');
    console.log(currency_code);

    this._http.getAllCountriesByCurrency(currency_code).subscribe(

      (data: any) => {
        console.log(data);
        this.allCountries = data;
      },
      (error: { errorMessage: any; }) => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )


    // to get countries of same language
    let language_code = this._route.snapshot.paramMap.get('languageCode');
    console.log(language_code);

    this._http.getAllCountriesByLanguage(language_code).subscribe(

      (data: any) => {
        console.log(data);
        this.allCountries = data;
      },
      (error: { errorMessage: any; }) => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )

  }


}
