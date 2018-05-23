import {Injectable} from '@angular/core';
import {TokenModel} from "../../model/auth/TokenModel";

@Injectable()
export class AuthService{
    isUserAuthenticated() : boolean {
        // TODO check jwt exp date
        return localStorage.getItem("token") != null
    }

    public saveToken(token: TokenModel)
    {
        localStorage.setItem("token",token.token)
    }

    public deleteToken()
    {
        localStorage.removeItem("token")
    }

}