import {AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, ViewChild} from '@angular/core';
import {MainService} from "../service/AuthService";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "./login/LoginComponent";
import {DashboardComponent} from "./dashboard/DashboardComponent";
import {AuthToken} from "../rest/auth/AuthToken";

@Component({
    selector: 'main-component',
    template: ' <ng-template top-host>  </ng-template> '
})
export class MainComponent implements AfterViewInit, OnDestroy {

    @ViewChild(TopHostDirective) topHost: TopHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private service: MainService) {
    }

    ngAfterViewInit() {
        if (this.service.isUserAuthenticated() == true)
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
        componentInstance.onLogged.subscribe((evt: AuthToken) => this.onUserLogged(evt))
    }

    onUserLogged(token: AuthToken) {
        this.service.saveToken(token);
        this.loadDashboardComponent();
    }

    onUserLoggedOut() {
        this.service.deleteToken();
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
