import {Injectable} from '@angular/core';
import {AuthToken} from "../rest/auth/AuthToken";

@Injectable()
export class MainService{
    isUserAuthenticated() : boolean {
        // TODO check jwt exp date
        return localStorage.getItem("token") != null
    }

    public saveToken(token: AuthToken)
    {
        localStorage.setItem("token",token)
    }

    public deleteToken()
    {
        localStorage.removeItem("token",null)
    }
}