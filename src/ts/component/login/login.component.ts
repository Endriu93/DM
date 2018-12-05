import {Component, EventEmitter} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {RestService} from "../../service/impl/RestService";
import {TokenModel} from "../../model/auth/TokenModel";
import {AuthService} from "../../service/impl/AuthService";

@Component({
    templateUrl: 'ts/component/login/login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(private rest: RestService,  private auth: AuthService){}

    public onUserLogged(token: TokenModel): void {
        this.auth.fireAuthorized(token);
    }

    onUsername(event: any) {
        this.username = event.target.value;
    }

    onPassword(event: any) {
        this.password = event.target.value;
    }

    onSubmit() {
        this.rest.authenticate(this.username,this.password)
            .subscribe(
                (data: TokenModel) => {
                    // console.log(data.token);
                    this.onUserLogged(data);
                },
                (err: HttpErrorResponse) => {
                    if(err.status == 401) // UNAUTHORIZED
                        alert("login or password incorrect!");
                    else
                        alert("service is temporary unavailable!");
                    console.log(err);
                }
            )
    }
}

