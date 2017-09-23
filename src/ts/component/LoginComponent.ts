import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    template: '<div> -- login component --</div>' +
                ' <button (click)="onUserLogged()">simulate correct login</button>'
})
export class LoginComponent {

    onLogged: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onUserLogged(): void
    {
        // alert("user Logged!");
        this.onLogged.emit(true);
    }
}
