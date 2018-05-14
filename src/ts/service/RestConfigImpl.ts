import {RestConfig} from "../serviceAbstract/RestConfig";
export class RestConfigImpl extends RestConfig {

    public getWebUrl(): string {
        return "http://localhost:8080/rest/auth";
    }
}