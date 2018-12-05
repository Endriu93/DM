import {RestConfig} from "../abstract/RestConfig";
export class RestConfigLocal extends RestConfig {

    public getWebUrl(): string {
        return "http://localhost:8080/rest/";
    }
}