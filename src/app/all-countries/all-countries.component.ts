import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestcountriesHttpService } from '../restcountries-http.service';
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  public allCountries: any;
  public allCountriesByCurrency: any;
  constructor(private _route: ActivatedRoute, private router: Router, public _http: RestcountriesHttpService) { }

  ngOnInit() {

    // to get countries of same region
    this._route.params.subscribe(param => {
      let region_name = this._route.snapshot.paramMap.get('regionName');
      console.log(region_name);

      this._http.getAllCountries(region_name).subscribe(

        (data: any) => {
          console.log(data);
          this.allCountries = data;
        },
        (error: { errorMessage: any; }) => {
          console.log("some error occured");
          console.log(error.errorMessage)
        }
      )
    });

    // to get countries of same currency
    this._route.params.subscribe(param => {
      let currency_code = this._route.snapshot.paramMap.get('currencyCode');
      console.log(currency_code + " is currency code");

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

    });

    // to get countries of same language
    // subscribing to params is necessary here bcoz the url gets updated but the component is not recreated ,
    // therefore the data on webpage doesn't seems to be updated. So to recreate the component, subscription to params is mandatory
    this._route.params.subscribe(param => {
      let language_code = this._route.snapshot.paramMap.get('languageCode');
      console.log(language_code + " is language code");

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
    });

  }

}