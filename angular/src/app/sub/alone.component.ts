import { Component, Input, AfterViewChecked, AfterContentChecked } from '@angular/core';

/**
 * this component should not be re-rendered coz it doesn't depends neither on a service nor 
 * on Input
 * why AfterViewChecked & AfterContentChecked are called each time CounterComponent
 * change ?
 */
@Component({
  selector: 'alone',
  template: `<span>I'm alone</span>`,
  styles: [`span { color: blue }`]
})
export class AloneComponent implements AfterViewChecked, AfterContentChecked  {
  ngAfterViewChecked() {
    console.info('%c alone view checked', 'color: blue; font-weight: bold')
  }

  ngAfterContentChecked() {
    console.info('%c alone content checked', 'color: blue')
  }
}
