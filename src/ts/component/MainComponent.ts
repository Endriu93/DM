import {AfterViewInit, Component, OnDestroy, ViewChild} from "@angular/core";
import {AuthService} from "../service/impl/AuthService";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TokenModel} from "../model/auth/TokenModel";
import {DynamicComponentService} from "../service/impl/DynamicComponentService";

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
        componentInstance.onLogged.subscribe((evt: TokenModel) => this.onUserLogged(evt))
    }

    onUserLogged(token: TokenModel) {
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
