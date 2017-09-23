import {AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, ViewChild} from '@angular/core';
import {MainService} from "../serviceAbstract/MainService";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "./LoginComponent";
import {DashboardComponent} from "./DashboardComponent";

@Component({
  selector: 'main-component',
  template: '<div>Component_test, user is logged + {{mainService.isUserAuthenticated()}}</div>' +
            ' <ng-template top-host>  </ng-template> '
})
export class MainComponent implements AfterViewInit, OnDestroy {

  mainService: MainService;
  @ViewChild(TopHostDirective) topHost: TopHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, service: MainService) {
    this.mainService = service;
  }

  ngAfterViewInit() {
    var component: any = LoginComponent;

    if(this.mainService.isUserAuthenticated()==true)
      component = DashboardComponent;

    this.loadComponent(component);
  }

  ngOnDestroy(): void {
  }

  loadComponent(component: any) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.topHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
