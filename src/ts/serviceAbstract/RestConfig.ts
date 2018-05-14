import {Injectable} from "@angular/core";

@Injectable()
export abstract class RestConfig{
    public abstract getWebUrl(): string
}