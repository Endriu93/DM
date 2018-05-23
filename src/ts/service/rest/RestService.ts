import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {TokenModel} from "../../model/auth/TokenModel";
import {RestConfig} from "./RestConfig";
import {Observable} from "rxjs/Observable";
import {DocumentModel} from "../../model/documents/DocumentModel";
import {ActivityModel} from "../../model/activities/ActivityModel";

@Injectable()
export class RestService {
    constructor(private http: HttpClient, private config: RestConfig) {}

    authenticate(login: string, password: string): Observable<TokenModel> {
        const params = new HttpParams()
            .set('login', login)
            .set('password', password);

        return this.http.get<TokenModel>(this.config.getWebUrl() + "auth",{params});
    }

    getDocuments(): Observable<DocumentModel[]> {
        return this.http.get<DocumentModel[]>(this.config.getWebUrl() + "docs");
    }

    getActivities(): Observable<ActivityModel[]> {
        return this.http.get<ActivityModel[]>(this.config.getWebUrl() + "acts");
    }
}