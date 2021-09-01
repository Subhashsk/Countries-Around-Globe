import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REST-Countries';
  constructor(public location: Location) {

  }

  // goback() method definition.
  public goBackToPreviousLocation() {
    this.location.back();
  }
}
