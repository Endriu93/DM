import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    templateUrl: 'html/loginComponent.html'
})
export class LoginComponent {

    onLogged: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onUserLogged(): void
    {
        // alert("user Logged!");
        this.onLogged.emit(true);
    }
}
