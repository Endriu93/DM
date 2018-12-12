import {Component, Inject, ViewChild} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {UploadService} from "../../../service/impl/UploadService";
import {Input} from "@angular/compiler/src/core";
import {RestService} from "../../../service/impl/RestService";
import {CategoryModel} from "../../../model/categories/CategoryModel";

@Component({
    selector: 'category_add',
    templateUrl: './category_add.html',
    styleUrls: ['./category_add.css']
})
export class CategoryAddDialog {
    constructor(public dialogRef: MatDialogRef<CategoryAddDialog>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData, private rest: RestService) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {
        this.dialogRef.close();
        let categoryModel: CategoryModel = {name: this.data.name, icon: "folder"}
        this.rest.addCategory(categoryModel).subscribe()
    }

}

export interface DialogData {
    name: string;
}
