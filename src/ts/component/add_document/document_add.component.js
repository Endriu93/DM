var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material"], function (require, exports, core_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocumentAddButton = /** @class */ (function () {
        function DocumentAddButton(dialog) {
            this.dialog = dialog;
        }
        DocumentAddButton.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DocumentAddDialog);
            dialogRef.afterClosed().subscribe(function (result) {
                _this.selectedOption = result;
            });
        };
        DocumentAddButton = __decorate([
            core_1.Component({
                selector: 'document_add',
                templateUrl: './document_add.html',
            }),
            __metadata("design:paramtypes", [material_1.MatDialog])
        ], DocumentAddButton);
        return DocumentAddButton;
    }());
    exports.DocumentAddButton = DocumentAddButton;
    var DocumentAddDialog = /** @class */ (function () {
        function DocumentAddDialog(dialogRef) {
            this.dialogRef = dialogRef;
        }
        DocumentAddDialog = __decorate([
            core_1.Component({
                selector: 'document_add_content',
                templateUrl: './document_add_content.html',
                styleUrls: ['./document_add.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef])
        ], DocumentAddDialog);
        return DocumentAddDialog;
    }());
    exports.DocumentAddDialog = DocumentAddDialog;
});
//# sourceMappingURL=document_add.component.js.map