import {SideNavItem} from "./SideNavItem";
/**
 * Created by Andrzej on 01.05.2018.
 */

export interface SideNavHandler{
    onCreateItems1(): SideNavItem[];
    onCreateItems2(): SideNavItem[];

    onItemClick(item:SideNavItem): any;
}