import {RestConfig} from "./RestConfig";
export class RestConfigLocal extends RestConfig {

    public getWebUrl(): string {
        return "http://localhost:8080/model/auth";
    }
}