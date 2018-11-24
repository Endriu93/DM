import {AfterViewInit, Component} from "@angular/core";
import {UserModel} from "../../model/user/UserModel";
import {RestService} from "../../service/rest/RestService";
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

    constructor(private rest: RestService) {
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
}