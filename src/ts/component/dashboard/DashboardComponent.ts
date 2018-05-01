import {Component, EventEmitter} from '@angular/core';

@Component({
    templateUrl: 'ts/component/dashboard/dashboardComponent.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
    onLoggedOut: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onUserLoggedOut(): void
    {
        // alert("user Logged out!");
        this.onLoggedOut.emit(true);
    }

}
