import {AfterViewInit, Component} from "@angular/core";
import {UserModel} from "../../model/user/UserModel";
import {RestService} from "../../service/impl/RestService";
import {MatDialog} from "@angular/material";
import {AddUserDialog} from "./add-user/add-user.component";
/**
 * Created by Andrzej on 24.11.2018.
 */

@Component({
    selector: 'users',
    templateUrl: 'ts/component/users/users.html',
    styleUrls: ['ts/component/users/users.css']
})
export class UsersComponent implements AfterViewInit {
    users: UserModel[] = [];

    constructor(private rest: RestService, private dialog: MatDialog) {
    }

    ngAfterViewInit(): void {
        this.rest.getUsers()
            .subscribe(
                (data: UserModel[]) => {
                    // console.log(data.token);
                    this.users = data;
                },
                err => {
                    alert("service is temporary unavailable!");
                }
            )
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AddUserDialog, {
            width: '250px',
            data: {login: "", password: ""}
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            // this.animal = result;
        });
    }
}