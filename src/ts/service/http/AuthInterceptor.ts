import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../view/AuthService";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private service: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.service.getToken().token}`,
            },
        });

        return next.handle(req);
    }
}