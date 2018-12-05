import {EventEmitter, Injectable} from '@angular/core';
import {TokenModel} from "../../model/auth/TokenModel";

@Injectable()
export class AuthService{

    private static TOKEN = "token";

    authEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    isUserAuthenticated() : boolean {
        // TODO check jwt exp date
        return localStorage.getItem(AuthService.TOKEN) != null
    }

    public getToken(): TokenModel | null {
        let token = localStorage.getItem(AuthService.TOKEN);
        if(token)
            return {token: token}
        else return {token: ""};
    }

    public fireTokenExpired() {
        this.authEvent.emit(false);
    }

    public saveToken(token: TokenModel)
    {
        localStorage.setItem(AuthService.TOKEN,token.token)
    }

    public deleteToken()
    {
        localStorage.removeItem(AuthService.TOKEN)
    }

}