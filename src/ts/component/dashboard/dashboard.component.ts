import {AfterViewInit, Component, EventEmitter, ViewChild} from "@angular/core";
import {SideNavHandler} from "../side-nav/SideNavHandler";
import {SideNavItem} from "../side-nav/SideNavItem";
import {ToolbarHandler} from "../toolbar/ToolbarHandler";
import {DashHostDirective} from "../../directive/DashHostDirective";
import {DocumentsComponent} from "../documents/documents.component";
import {DynamicComponentService} from "../../service/view/DynamicComponentService";
import {ActivitiesComponent} from "../activities/activities.component";
import {UsersComponent} from "../users/users.component";

@Component({
    templateUrl: 'ts/component/dashboard/dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements SideNavHandler, ToolbarHandler, AfterViewInit {
    onLoggedOut: EventEmitter<boolean> = new EventEmitter<boolean>(false);
    drawerOpen: Boolean = false;

    @ViewChild(DashHostDirective) dashHost: DashHostDirective;

    constructor(private dynamicComponentService: DynamicComponentService) {
    }

    public onUserLoggedOut(): void {
        this.onLoggedOut.emit(true);
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
        this.onLoggedOut.emit(true);
    }
}
