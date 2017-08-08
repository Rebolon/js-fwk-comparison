import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './sub/hello.component';
import { CounterComponent } from './sub/counter.component';
import { AloneComponent } from './sub/alone.component';
import { SubscribeComponent } from './sub/subscribe.component';
import { EmitComponent } from './sub/emit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CounterComponent, AloneComponent, SubscribeComponent, EmitComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
