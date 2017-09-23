import {MainService} from "./MainService";

export class MainServiceImpl extends MainService
{
    isUserAuthenticated(): boolean {
        return false;
    }
}