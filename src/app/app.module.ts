import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { RestcountriesHttpService } from './restcountries-http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'allcountries/:regionName', component: AllCountriesComponent },
      { path: 'allcountries/language/:languageCode', pathMatch: 'full', component: AllCountriesComponent },
      { path: 'allcountries/currency/:currencyCode', pathMatch: 'full', component: AllCountriesComponent },
      { path: 'country-view/:country.name', component: CountryViewComponent }
    ], { useHash: true })
  ],
  providers: [RestcountriesHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
