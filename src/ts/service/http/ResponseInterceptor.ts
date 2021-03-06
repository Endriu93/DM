import 'rxjs/add/operator/do';
import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../impl/AuthService";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.auth.fireUnauthorized()
                }
            }
        });
    }
}