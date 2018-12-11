import {SideNavItem} from "./SideNavItem";
/**
 * Created by Andrzej on 01.05.2018.
 */

export interface SideNavHandler{
    loadActsComponent(): void
    loadDocsComponent(): void
    loadCatsComponent(): void
    loadUsersComponent(): void
    logout(): void
}