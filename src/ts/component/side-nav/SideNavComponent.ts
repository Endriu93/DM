/**
 * Created by Andrzej on 06.05.2017.
 */
import {Component, Input} from "@angular/core";
import {SideNavHandler} from "./SideNavHandler";

@Component({
  selector: 'side-nav',
  templateUrl: './sideNav.html',
  styleUrls: ['./sideNav.css']
})
export class SideNavComponent {

  userName: string = 'User 11';
  groupName: string = 'Group 1';

  @Input('handler') menuHandler: SideNavHandler;

}
