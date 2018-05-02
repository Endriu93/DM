import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    templateUrl: 'ts/component/login/loginComponent.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    onLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
    username: string;
    password: string;

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
        //TODO
        if (this.username == "admin" && this.password == "admin")
            this.onUserLogged();
    }
}
