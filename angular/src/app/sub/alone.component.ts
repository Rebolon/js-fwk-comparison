import { Component, Input, AfterViewChecked, AfterContentChecked, OnInit } from '@angular/core';

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
export class AloneComponent implements OnInit, AfterViewChecked, AfterContentChecked {
  constructor() {
      console.info('%c alone created', 'color: blue')
  }

  ngOnInit() {
      console.info('%c alone mounted', 'color: blue')
  }

  ngAfterViewChecked() {
    console.info('%c alone view checked', 'color: blue')
  }

  ngAfterContentChecked() {
    console.info('%c alone content checked', 'color: blue')
  }
}
