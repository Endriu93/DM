import { NgModule } from '@angular/core';
// don't know why, but is required
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './MainComponent';

@NgModule({
  imports:      [ BrowserModule ],
  // here we place all used components in appliation
  declarations: [ MainComponent ],
  // component, which will bootstrap index.html
  bootstrap:    [ MainComponent ]
})
export class AppModule {

}
