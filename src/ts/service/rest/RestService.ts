import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthToken} from "../../model/auth/AuthToken";
import {RestConfig} from "./RestConfig";
import {Observable} from "rxjs/Observable";
import {DocumentModel} from "../../model/documents/DocumentModel";

@Injectable()
export class RestService {
    constructor(private http: HttpClient, private config: RestConfig) {}

    authenticate(login: string, password: string): Observable<AuthToken> {
        const params = new HttpParams()
            .set('login', login)
            .set('password', password);

        return this.http.get<AuthToken>(this.config.getWebUrl() + "auth",{params});
    }

    getDocuments(): Observable<DocumentModel[]> {
        return this.http.get<DocumentModel[]>(this.config.getWebUrl() + "docs");
    }
}