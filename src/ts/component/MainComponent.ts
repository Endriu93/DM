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
        service.authEvent.subscribe((auth:boolean) => this.reload(auth) )
    }

    ngAfterViewInit() {
        this.reload(this.service.isUserAuthenticated());
    }

    private reload(auth: boolean){
        if (auth)
            this.loadDashboardComponent();
        else
            this.loadLoginComponent();
    }

    loadDashboardComponent() {
        var componentInstance: DashboardComponent = this.dynamicComponentService.loadComponent(DashboardComponent,this.topHost).instance;
    }

    loadLoginComponent() {
        var componentInstance: LoginComponent = this.dynamicComponentService.loadComponent(LoginComponent, this.topHost).instance;
    }

    ngOnDestroy(): void {
    }

}
