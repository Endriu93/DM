/**
 * Created by Andrzej on 06.05.2017.
 */
import {AfterViewInit, Component} from "@angular/core";
import {RestService} from "../../service/rest/RestService";
import {DocumentModel} from "../../model/documents/DocumentModel";

@Component({
    selector: 'documents',
    templateUrl: 'ts/component/documents/documents.html',
    styleUrls: ['ts/component/documents/documents.css']
})
export class DocumentsComponent implements AfterViewInit {
    /* documents: DocumentItem[] = [
     {name: 'Dokument1' , icon: 'folder', category: 'kategoria 1', addedBy: 'User 11'},
     {name: 'Dokument2' , icon: 'folder', category: 'kategoria 2', addedBy: 'User 11'}
     ];*/
    documents: DocumentModel[] = [];

    constructor(private rest: RestService) {
    }

    ngAfterViewInit(): void {
        this.rest.getDocuments()
            .subscribe(
                (data: DocumentModel[]) => {
                    // console.log(data.token);
                    this.documents = data;
                },
                err => {
                    alert("service is temporary unavailable!");
                }
            )
    }
}
