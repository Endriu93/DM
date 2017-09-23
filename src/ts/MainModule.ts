import { NgModule } from '@angular/core';
// don't know why, but is required
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './MainComponent';
import {MainService} from "./MainService";
import {MainServiceImpl} from "./MainServiceImpl";
import {TopHostDirective} from "./TopHostDirective";
import {LoginComponent} from "./LoginComponent";
import {DashboardComponent} from "./DashboardComponent";

@NgModule({
  imports:      [ BrowserModule ],
  // here we place all used components in appliation
  declarations: [ MainComponent,TopHostDirective, LoginComponent, DashboardComponent ],
  // component, which will bootstrap index.html
  bootstrap:    [ MainComponent ],
  providers: [{provide: MainService, useClass:MainServiceImpl}],
  entryComponents: [LoginComponent, DashboardComponent]
})
export class AppModule {

}
