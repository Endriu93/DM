import {Component} from '@angular/core';
import {SideNavItem} from "../side-nav/SideNavItem";

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  selecteditem: SideNavItem;
  name = 'Angular';
  var = this;

  public onMenuItemSelected(item: SideNavItem)
  {

  }
}
