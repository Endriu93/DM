import {AfterViewInit, Component, EventEmitter, ViewChild} from "@angular/core";
import {SideNavHandler} from "../side-nav/SideNavHandler";
import {ToolbarHandler} from "../toolbar/ToolbarHandler";
import {DashHostDirective} from "../../directive/DashHostDirective";
import {DocumentsComponent} from "../documents/documents.component";
import {DynamicComponentService} from "../../service/impl/DynamicComponentService";
import {ActivitiesComponent} from "../activities/activities.component";
import {UsersComponent} from "../users/users.component";
import {AuthService} from "../../service/impl/AuthService";

@Component({
    templateUrl: 'ts/component/dashboard/dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements SideNavHandler, ToolbarHandler, AfterViewInit {
    drawerOpen: Boolean = false;

    @ViewChild(DashHostDirective) dashHost: DashHostDirective;

    constructor(private dynamicComponentService: DynamicComponentService, private auth: AuthService) {
    }

    onMenuClick(): any {
        this.toggleDrawer();
    }

    onUploadClick(): any {
        this.toggleDrawer();
    }

    private toggleDrawer() {
        this.drawerOpen = !this.drawerOpen;
    }

    private showUploadWindow() {

    }

    ngAfterViewInit(): void {
        this.loadDocsComponent(); // TODO choose based on last saved state
    }

    loadActsComponent() {
        this.dynamicComponentService.loadComponent(ActivitiesComponent, this.dashHost)
        this.toggleDrawer()
    }

    loadDocsComponent() {
        this.dynamicComponentService.loadComponent(DocumentsComponent, this.dashHost)
        this.toggleDrawer()
    }

    loadUsersComponent() {
        this.dynamicComponentService.loadComponent(UsersComponent, this.dashHost)
        this.toggleDrawer()
    }

    logout() {
        this.auth.fireUnauthorized();
    }
}
