import {Component, ViewChild} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {UploadService} from "../../../service/impl/UploadService";
import {Input} from "@angular/compiler/src/core";

@Component({
    selector: 'document_add_content',
    templateUrl: './document_add.html',
    styleUrls: ['./document_add.css']
})
export class DocumentAddDialog {
    @ViewChild('file') file;
    public files: Set<File> = new Set();

    constructor(public dialogRef: MatDialogRef<DocumentAddDialog>, public uploadService: UploadService) {
    }

    addFile() {
        this.file.nativeElement.click();
    }

    onFileAdded() {
        const files: { [key: string]: File } = this.file.nativeElement.files;
        for (let key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
    }

    ok() {
        this.uploadService.upload(this.files);
    }
}
