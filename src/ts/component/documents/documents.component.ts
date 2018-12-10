/**
 * Created by Andrzej on 06.05.2017.
 */
import {AfterViewInit, Component} from "@angular/core";
import {RestService} from "../../service/impl/RestService";
import {DocumentModel} from "../../model/documents/DocumentModel";
import {DocumentAddDialog} from "./add-document/document_add.component";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'documents',
    templateUrl: 'ts/component/documents/documents.html',
    styleUrls: ['ts/component/documents/documents.css']
})
export class DocumentsComponent implements AfterViewInit {
    documents: DocumentModel[] = [];

    constructor(private rest: RestService, private dialog: MatDialog) {
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

    openDialog(): void {
        const dialogRef = this.dialog.open(DocumentAddDialog, {
        });

       /* dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            // this.animal = result;
        });*/
    }
}
