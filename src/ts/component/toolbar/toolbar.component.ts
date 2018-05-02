/**
 * Created by Andrzej on 06.05.2017.
 */
import {Component, Input} from "@angular/core";
import {ToolbarHandler} from "./ToolbarHandler";

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.css']
})
export class ToolbarComponent  {
  appName: string = 'Documents Manager';

  @Input('handler') menuHandler: ToolbarHandler;

  // menuItems: SideNavItem[] = [
  //   {name: 'Lista Dokumentów' , icon: 'folder_open'},
  //   {name: 'Lista Aktywności' , icon: 'event'}
  // ];
}
