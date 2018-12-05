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

    public fireUnauthorized() {
        this.authEvent.emit(false);
        this.deleteToken();
    }

    public fireAuthorized(token: TokenModel) {
        this.authEvent.emit(true);
        this.saveToken(token);
    }

    private saveToken(token: TokenModel)
    {
        localStorage.setItem(AuthService.TOKEN,token.token)
    }

    private deleteToken()
    {
        localStorage.removeItem(AuthService.TOKEN)
    }

}