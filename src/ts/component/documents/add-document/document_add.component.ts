import {Component, ViewChild} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'document_add_content',
  templateUrl: './document_add.html',
  styleUrls: ['./document_add.css']
})
export class DocumentAddDialog {
  @ViewChild('file') file;

  constructor(public dialogRef: MatDialogRef<DocumentAddDialog>) {}

  addFile() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {}
}
