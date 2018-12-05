import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {TokenModel} from "../../model/auth/TokenModel";
import {RestConfig} from "../abstract/RestConfig";
import {Observable} from "rxjs/Observable";
import {DocumentModel} from "../../model/documents/DocumentModel";
import {ActivityModel} from "../../model/activities/ActivityModel";
import {UserModel} from "../../model/user/UserModel";

@Injectable()
export class RestService {
    constructor(private http: HttpClient, private config: RestConfig) {
    }

    private url(end: string): string {
        return this.config.getWebUrl() + end;
    }

    authenticate(login: string, password: string): Observable<TokenModel> {
        const params = new HttpParams()
            .set('login', login)
            .set('password', password);

        return this.http.get<TokenModel>(this.url("auth"), {params});
    }

    getDocuments(): Observable<DocumentModel[]> {
        return this.http.get<DocumentModel[]>(this.url("docs"));
    }

    getActivities(): Observable<ActivityModel[]> {
        return this.http.get<ActivityModel[]>(this.url("acts"));
    }

    getLoggedUser(): Observable<UserModel> {
        return this.http.get<UserModel>(this.url("users/logged"));
    }

    getUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.url("users"));
    }
}