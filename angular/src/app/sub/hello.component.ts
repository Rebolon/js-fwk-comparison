import { Component, Input, AfterViewChecked, AfterContentChecked } from '@angular/core';

/**
 * this component should not be re-rendered because its Input never change
 * why AfterViewChecked & AfterContentChecked are called each time CounterComponent
 * change ?
 */
@Component({
  selector: 'hello',
  template: `<span>Hello {{name}}!</span>`,
  styles: [`span { color: orange }`]
})
export class HelloComponent implements AfterViewChecked, AfterContentChecked  {
  @Input() name: string;

  ngAfterViewChecked() {
    console.info('%c hello view checked', 'color: orange; font-weight: bold')
  }

  ngAfterContentChecked() {
    console.info('%c hello content checked', 'color: orange')
  }
}
