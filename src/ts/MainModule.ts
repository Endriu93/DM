import { NgModule } from '@angular/core';
// don't know why, but is required
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './MainComponent';

@NgModule({
  imports:      [ BrowserModule ],
  // here we place all used components in appliation
  declarations: [ AppComponent ],
  // component, which will bootstrap index.html
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
