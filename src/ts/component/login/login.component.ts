import {Component, EventEmitter} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {RestService} from "../../service/rest/RestService";
import {TokenModel} from "../../model/auth/TokenModel";

@Component({
    templateUrl: 'ts/component/login/login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    onLogged: EventEmitter<TokenModel> = new EventEmitter<TokenModel>();
    username: string;
    password: string;

    constructor(private rest: RestService){}

    public onUserLogged(token: TokenModel): void {
        this.onLogged.emit(token);
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
                    // console.log("error occured");
                }
            )
    }
}

