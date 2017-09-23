import {Component, EventEmitter} from '@angular/core';

@Component({
    template: '<div> -- dashboard component --</div>' +
    ' <button (click)="onUserLoggedOut()">simulate log out</button>'
})
export class DashboardComponent {
    onLoggedOut: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onUserLoggedOut(): void
    {
        // alert("user Logged out!");
        this.onLoggedOut.emit(true);
    }

}
