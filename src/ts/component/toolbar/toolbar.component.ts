/**
 * Created by Andrzej on 06.05.2017.
 */
import { Component } from '@angular/core';
// import { SideNavItem } from './side-nav-menu-item';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.css']
})
export class ToolbarComponent  {
  appName: string = 'Documents Manager';
  // menuItems: SideNavItem[] = [
  //   {name: 'Lista Dokumentów' , icon: 'folder_open'},
  //   {name: 'Lista Aktywności' , icon: 'event'}
  // ];
}
