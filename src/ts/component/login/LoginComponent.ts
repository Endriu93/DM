import {Component, EventEmitter} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {RestService} from "../../rest/RestService";

@Component({
    templateUrl: 'ts/component/login/loginComponent.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    onLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
    username: string;
    password: string;

    constructor(private rest: RestService){}

    public onUserLogged(): void {
        // alert("user Logged!");
        this.onLogged.emit(true);
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
                data => {
                    console.log(data);
                    this.onUserLogged();
                },
                (err: HttpErrorResponse) => {
                    if(err.status == 401)
                        alert("login or password incorrect!");
                    else
                        alert("service is temporary unavailable!");
                    console.log("error occured");
                }
            )
    }
}

