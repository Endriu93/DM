import {AfterViewInit, Component, OnDestroy, ViewChild} from "@angular/core";
import {AuthService} from "../service/view/AuthService";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "./login/LoginComponent";
import {DashboardComponent} from "./dashboard/DashboardComponent";
import {AuthToken} from "../model/auth/AuthToken";
import {DynamicComponentService} from "../service/view/DynamicComponentService";

@Component({
    selector: 'main-component',
    template: ' <ng-template top-host>  </ng-template> '
})
export class MainComponent implements AfterViewInit, OnDestroy {

    @ViewChild(TopHostDirective) topHost: TopHostDirective;

    constructor(private dynamicComponentService: DynamicComponentService, private service: AuthService) {
    }

    ngAfterViewInit() {
        if (this.service.isUserAuthenticated() == true)
            this.loadDashboardComponent();
        else
            this.loadLoginComponent();
    }

    loadDashboardComponent() {
        var componentInstance: DashboardComponent = this.dynamicComponentService.loadComponent(DashboardComponent,this.topHost).instance;
        componentInstance.onLoggedOut.subscribe((evt: any) => this.onUserLoggedOut())
    }

    loadLoginComponent() {
        var componentInstance: LoginComponent = this.dynamicComponentService.loadComponent(LoginComponent, this.topHost).instance;
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

}
