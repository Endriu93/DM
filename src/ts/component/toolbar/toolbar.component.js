var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { SideNavMenuItem } from './side-nav-menu-item';
    var ToolbarComponent = /** @class */ (function () {
        function ToolbarComponent() {
            this.appName = 'Documents Manager';
            // menuItems: SideNavMenuItem[] = [
            //   {name: 'Lista Dokumentów' , icon: 'folder_open'},
            //   {name: 'Lista Aktywności' , icon: 'event'}
            // ];
        }
        ToolbarComponent = __decorate([
            core_1.Component({
                selector: 'toolbar',
                templateUrl: './toolbar.html',
                styleUrls: ['./toolbar.css']
            })
        ], ToolbarComponent);
        return ToolbarComponent;
    }());
    exports.ToolbarComponent = ToolbarComponent;
});
//# sourceMappingURL=toolbar.component.js.map