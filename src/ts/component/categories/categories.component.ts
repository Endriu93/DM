/**
 * Created by Andrzej on 06.05.2017.
 */
import {AfterViewInit, Component} from '@angular/core';
import {ActivityModel} from '../../model/activities/ActivityModel';
import {RestService} from "../../service/impl/RestService";
import {CategoryModel} from "../../model/categories/CategoryModel";
import {MatDialog} from "@angular/material";
import {CategoryAddDialog} from "./add-category/category_add.component";

@Component({
  selector: 'categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class CategoriesComponent implements AfterViewInit {
    categories: CategoryModel[] = [];

    constructor(private rest: RestService, private dialog: MatDialog) {
    }

    ngAfterViewInit(): void {
        this.rest.getCategories()
            .subscribe(
                (data: CategoryModel[]) => {
                    // console.log(data.token);
                    this.categories = data;
                },
                err => {
                    alert("service is temporary unavailable!");
                }
            )
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CategoryAddDialog, {data: {name: ""}
        });

        /* dialogRef.afterClosed().subscribe(result => {
         // console.log('The dialog was closed');
         // this.animal = result;
         });*/
    }
}
