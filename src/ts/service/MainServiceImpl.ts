import {MainService} from "../serviceAbstract/MainService";

export class MainServiceImpl extends MainService
{
    isUserAuthenticated(): boolean {
        return false;
    }
}