import {Component, EventEmitter} from "@angular/core";
import {SideNavHandler} from "../side-nav/SideNavHandler";
import {SideNavItem} from "../side-nav/SideNavItem";

enum Menu {DOCS,ACTS,LOGOUT}

@Component({
    templateUrl: 'ts/component/dashboard/dashboardComponent.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements SideNavHandler {
    onLoggedOut: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onUserLoggedOut(): void {
        // alert("user Logged out!");
        this.onLoggedOut.emit(true);
    }

    onCreateItems1(): SideNavItem[] {
        return [
            {id: Menu.DOCS, name: 'Lista Dokumentów', icon: 'folder_open'},
            {id: Menu.ACTS, name: 'Lista Aktywności', icon: 'event'}
            ];
    }

    onCreateItems2(): SideNavItem[] {
        return [{id: Menu.LOGOUT, name: 'Wyloguj sss', icon: 'power_settings_new'}];
    }

    onItemClick(item: SideNavItem): any {
        console.log(item.name + " was clicked")

        switch (item.id ) {
            case Menu.LOGOUT: {
                this.onUserLoggedOut();
                break;
            }
        }
    }
}
