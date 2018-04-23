import {Component} from '@angular/core';
import {SideNavMenuItem} from "../side-nav/side-nav-menu-item";

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  selecteditem: SideNavMenuItem;
  name = 'Angular';
  var = this;

  public onMenuItemSelected(item: SideNavMenuItem)
  {

  }
}
