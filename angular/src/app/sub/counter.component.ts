import { Component, OnInit } from '@angular/core';

/**
 * this component doesn't emit any Output so no component depend on its changes
 */
@Component({
  selector: 'counter',
  template: `{{counter}}`
})
export class CounterComponent implements OnInit {
  protected counter: number = 0
  
  ngOnInit() {
    setInterval(() => this.counter++, 2000)
  }
}
