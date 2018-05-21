import {Injectable} from '@angular/core';
import {AuthToken} from "../../model/auth/AuthToken";

@Injectable()
export class AuthService{
    isUserAuthenticated() : boolean {
        // TODO check jwt exp date
        return localStorage.getItem("token") != null
    }

    public saveToken(token: AuthToken)
    {
        localStorage.setItem("token",token.token)
    }

    public deleteToken()
    {
        localStorage.removeItem("token")
    }

}