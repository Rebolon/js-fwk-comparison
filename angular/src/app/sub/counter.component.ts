import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';

/**
 * this component doesn't emit any Output so no component depend on its changes
 */
@Component({
  selector: 'counter',
  template: `{{counter}}`
})
export class CounterComponent implements OnInit, AfterViewChecked, AfterContentChecked {
  protected counter: number = 0

  constructor() {
    console.info('%c counter created', 'color: pink')
  }

  ngOnInit() {
    console.info('%c counter mounted', 'color: pink')
    setInterval(() => this.counter++, 2000)
  }

  ngAfterViewChecked() {
    console.info('%c counter view checked', 'color: pink')
  }

  ngAfterContentChecked() {
    console.info('%c counter content checked', 'color: pink')
  }
}
