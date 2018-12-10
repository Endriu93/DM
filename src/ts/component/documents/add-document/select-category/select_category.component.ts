import {Component} from '@angular/core';


@Component({
  selector: 'select-category',
  templateUrl: './select-category.html',
  styleUrls: ['./select_category.css']
})
export class SelectCategoryComponent {
  selectedValue: string;

  foods = [
    {value: 'steak-0', viewValue: 'Kategoria 1'},
    {value: 'pizza-1', viewValue: 'Kategoria 2'},
    {value: 'tacos-2', viewValue: 'Kategoria 3'}
  ];
}
