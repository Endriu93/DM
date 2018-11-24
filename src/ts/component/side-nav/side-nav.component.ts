/**
 * Created by Andrzej on 06.05.2017.
 */
import {Component, Input} from "@angular/core";
import {SideNavHandler} from "./SideNavHandler";
import {SideNavItem} from "./SideNavItem";
import {RestService} from "../../service/rest/RestService";
import {UserModel} from "../../model/user/UserModel";

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.html',
    styleUrls: ['./side-nav.css']
})
export class SideNavComponent {

    constructor(private rest: RestService) {
    }

    readonly DocsID = 1;
    readonly ActsID = 2;
    readonly UsersID: 3;
    readonly LogoutID = 4;

    userName: string = '---';
    menu1: SideNavItem[] = [];
    menu2: SideNavItem[] = [];

    @Input('handler') menuHandler: SideNavHandler;

    ngAfterViewInit(): void {
        this.rest.getLoggedUser()
            .subscribe(
                (userModel: UserModel) => {
                    this.loadData(userModel)
                },
                err => {
                    alert("Error from side-nav.component, service is temporary unavailable!");
                }
            )
    }

    private loadData(userModel: UserModel) {
        this.userName = userModel.login;

        this.menu1 = [
            {id: this.DocsID, name: 'Lista Dokumentów', icon: 'folder_open'},
            {id: this.ActsID, name: 'Lista Aktywności', icon: 'event'}
        ];

        if (userModel.admin) this.menu1.push({id: this.UsersID, name: 'Lista Użytkowników', icon: 'account_circle'})

        this.menu2 = [{id: this.LogoutID, name: 'Wyloguj', icon: 'power_settings_new'}];
    }

    onItemClick(item: SideNavItem): any {
        switch (item.id ) {
            case this.LogoutID: {
                this.menuHandler.logout()
                break;
            }
            case this.ActsID: {
                this.menuHandler.loadActsComponent()
                break;
            }
            case this.DocsID: {
                this.menuHandler.loadDocsComponent()
                break;
            }
            case this.UsersID: {
                this.menuHandler.loadUsersComponent()
                break;
            }
        }
    }

}
