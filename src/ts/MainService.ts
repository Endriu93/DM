import {Injectable} from '@angular/core';

@Injectable()
export abstract class MainService{
    abstract isUserAuthenticated() : boolean
}