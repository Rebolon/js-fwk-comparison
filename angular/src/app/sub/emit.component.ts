import { Component, Output, EventEmitter, AfterViewChecked, AfterContentChecked, OnInit } from '@angular/core';

/**
 * this component should re-render only when you fill something in the input text
 * 
 * why AfterViewChecked & AfterContentChecked are called each time CounterComponent
 * change ?
 */
@Component({
  selector: 'emit',
  template: `<span>fill something here <input [ngModel]='_valueToEmit' (ngModelChange)='change($event)'/> </span>`,
  styles: [`span { color: brown }`]
})
export class EmitComponent implements OnInit, AfterViewChecked, AfterContentChecked {
  protected _valueToEmit: string

  set valueToEmit(value) {
    this._valueToEmit = value
    this.value.emit(value)
  }

  @Output() value: EventEmitter<string> = new EventEmitter()

  constructor() {
      console.info('%c emit created', 'color: pink')
  }

  ngOnInit() {
      console.info('%c emit mounted', 'color: pink')
  }

  ngAfterViewChecked() {
    console.info('%c emit view checked', 'color: pink')
  }

  ngAfterContentChecked() {
    console.info('%c emit content checked', 'color: pink')
  }

  change(newValue) {
    this.valueToEmit = newValue
  }
}
