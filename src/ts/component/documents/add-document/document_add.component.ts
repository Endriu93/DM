import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'document_add_content',
  templateUrl: './document_add.html',
  styleUrls: ['./document_add.css']
})
export class DocumentAddDialog {
  constructor(public dialogRef: MatDialogRef<DocumentAddDialog>) {}
}
