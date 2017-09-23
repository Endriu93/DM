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
        if (this.mainService.isUserAuthenticated() == true)
            this.loadDashboardComponent();
        else
            this.loadLoginComponent();
    }

    loadDashboardComponent() {
        var componentInstance: DashboardComponent = this.loadComponent(DashboardComponent).instance;
        componentInstance.onLoggedOut.subscribe((evt: any) => this.onUserLoggedOut())
    }

    loadLoginComponent() {
        var componentInstance: LoginComponent = this.loadComponent(LoginComponent).instance;
        componentInstance.onLogged.subscribe((evt: any) => this.onUserLogged())
    }

    onUserLogged() {
        // alert("MainComponent.onUserLogged()");
        this.loadDashboardComponent();
    }

    onUserLoggedOut() {
        // alert("MainComponent.onUserLoggedOut()");
        this.loadLoginComponent();
    }

    ngOnDestroy(): void {
    }

    loadComponent(component: any): any {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

        let viewContainerRef = this.topHost.viewContainerRef;
        viewContainerRef.clear();

        return viewContainerRef.createComponent(componentFactory);
    }
}
