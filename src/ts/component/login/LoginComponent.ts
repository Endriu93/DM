import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
    templateUrl: 'ts/component/login/loginComponent.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    onLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
    username: string;
    password: string;

    constructor(private http: HttpClient){

    }

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
        // TODO - ta metoda nie powina iść przez interceptor
        this.http.get<AuthToken>(`http://localhost:8080/rest/auth?login=${this.username}&password=${this.password}`)
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

interface AuthToken {
    token: string
}