import {AfterViewInit, Component, EventEmitter, ViewChild} from "@angular/core";
import {SideNavHandler} from "../side-nav/SideNavHandler";
import {SideNavItem} from "../side-nav/SideNavItem";
import {ToolbarHandler} from "../toolbar/ToolbarHandler";
import {DashHostDirective} from "../../directive/DashHostDirective";
import {DocumentsComponent} from "../documents/documents.component";
import {DynamicComponentService} from "../../service/view/DynamicComponentService";
import {ActivitiesComponent} from "../activities/activities.component";

enum Menu {DOCS,ACTS,LOGOUT}

@Component({
    templateUrl: 'ts/component/dashboard/dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements SideNavHandler, ToolbarHandler, AfterViewInit {
    onLoggedOut: EventEmitter<boolean> = new EventEmitter<boolean>();
    drawerOpen: Boolean = false;

    @ViewChild(DashHostDirective) dashHost: DashHostDirective;

    constructor(private dynamicComponentService: DynamicComponentService ) {
    }

    public onUserLoggedOut(): void {
        this.onLoggedOut.emit(true);
    }

    onCreateItems1(): SideNavItem[] {
        return [
            {id: Menu.DOCS, name: 'Lista Dokumentów', icon: 'folder_open'},
            {id: Menu.ACTS, name: 'Lista Aktywności', icon: 'event'}
            ];
    }

    onCreateItems2(): SideNavItem[] {
        return [{id: Menu.LOGOUT, name: 'Wyloguj', icon: 'power_settings_new'}];
    }

    onItemClick(item: SideNavItem): any {
        switch (item.id ) {
            case Menu.LOGOUT: {
                this.onUserLoggedOut();
                break;
            }
            case Menu.ACTS: {
                this.loadActsComponent()
                break;
            }
            case Menu.DOCS: {
                this.loadDocsComponent()
                break;
            }
        }
        this.toggleDrawer()
    }

    onMenuClick(): any {
        this.toggleDrawer();
    }

    private toggleDrawer(){
        this.drawerOpen = !this.drawerOpen;
    }

    ngAfterViewInit(): void {
        this.loadDocsComponent(); // TODO choose based on last saved state
    }

    loadActsComponent() {
        this.dynamicComponentService.loadComponent(ActivitiesComponent,this.dashHost)
    }

    loadDocsComponent() {
        this.dynamicComponentService.loadComponent(DocumentsComponent,this.dashHost)
    }

}
