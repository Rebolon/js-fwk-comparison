import { Component, Input, AfterViewChecked, AfterContentChecked, OnInit } from '@angular/core';

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
export class HelloComponent implements OnInit, AfterViewChecked, AfterContentChecked {
  @Input() name: string;

  constructor() {
    console.info('%c hello created', 'color: orange')
  }

  ngOnInit() {
    console.info('%c hello mounted', 'color: orange')
  }

  ngAfterViewChecked() {
    console.info('%c hello view checked', 'color: orange')
  }

  ngAfterContentChecked() {
    console.info('%c hello content checked', 'color: orange')
  }
}
