import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'add-user-dialog',
    templateUrl: 'ts/component/users/add-user/add-user-dialog.html',
})
export class AddUserDialog {

    constructor(public dialogRef: MatDialogRef<AddUserDialog>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}

export interface DialogData {
    login: string;
    password: string;
}