import {Component} from '@angular/core';
import {MainService} from "./MainService";

@Component({
  selector: 'main-component',
  template: '<div>Component_test, user is logged + {{mainService.isUserAuthenticated()}}</div>'
})
export class MainComponent {

  mainService: MainService;

  constructor(service: MainService) {
    this.mainService = service;
  }
}
