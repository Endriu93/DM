import { NgModule } from '@angular/core';
// don't know why, but is required
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from '../component/MainComponent';
import {MainService} from "../serviceAbstract/MainService";
import {MainServiceImpl} from "../service/MainServiceImpl";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "../component/LoginComponent";
import {DashboardComponent} from "../component/DashboardComponent";

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
