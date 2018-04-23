var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectCategoryComponent = /** @class */ (function () {
        function SelectCategoryComponent() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Kategoria 1' },
                { value: 'pizza-1', viewValue: 'Kategoria 2' },
                { value: 'tacos-2', viewValue: 'Kategoria 3' }
            ];
        }
        SelectCategoryComponent = __decorate([
            core_1.Component({
                selector: 'select-category',
                templateUrl: './select-category.html',
                styleUrls: ['./select_category.css']
            })
        ], SelectCategoryComponent);
        return SelectCategoryComponent;
    }());
    exports.SelectCategoryComponent = SelectCategoryComponent;
});
//# sourceMappingURL=select_category.component.js.map