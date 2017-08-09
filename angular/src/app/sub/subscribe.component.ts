import { Component, AfterViewChecked, AfterContentChecked, OnInit } from '@angular/core';

/**
 * this component should be re-rendered only when EmitComponent emit a new value
 * 
 * why AfterViewChecked & AfterContentChecked are called each time CounterComponent
 * change ?
 */
@Component({
  selector: 'subscribe',
  template: `
  <ol>
    <li><span>display field value from emit component <cite *ngIf="value">: "{{value}}"</cite></span></li>
    <li><emit (value)='setValue($event)'></emit></li>
  </ol>`,
  styles: [`span { color: blueviolet }`]
})
export class SubscribeComponent implements OnInit, AfterViewChecked, AfterContentChecked {
  protected value: string = ''

  setValue(value) {
    this.value = value
  }

  constructor() {
    console.info('%c subscribe created', 'color: blueviolet')
  }

  ngOnInit() {
    console.info('%c subscribe mounted', 'color: blueviolet')
  }

  ngAfterViewChecked() {
    console.info('%c subscribe view checked', 'color: blueviolet')
  }

  ngAfterContentChecked() {
    console.info('%c subscribe content checked', 'color: blueviolet')
  }
}
