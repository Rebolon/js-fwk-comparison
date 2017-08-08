import { Component, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewChecked, AfterContentChecked {
  name = 'Angular 4';

  ngAfterViewChecked() {
    console.info('%c app view checked', 'color: black; font-weight: bold')
  }

  ngAfterContentChecked() {
    console.info('%c app content checked', 'color: black')
  }

}
