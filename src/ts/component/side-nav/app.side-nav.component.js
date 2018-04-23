var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../main/app.component"], function (require, exports, core_1, app_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SideNavComponent = /** @class */ (function () {
        function SideNavComponent() {
            this.menuItems = [
                { name: 'Lista Dokumentów', icon: 'folder_open' },
                { name: 'Lista Aktywności', icon: 'event' }
            ];
            this.userName = 'User 11';
            this.groupName = 'Group 1';
        }
        SideNavComponent.prototype.onItemClick = function (item) {
            alert(item.name);
            // parent.onMenuItemSelected(item);
            // parent.
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", app_component_1.AppComponent)
        ], SideNavComponent.prototype, "parent", void 0);
        SideNavComponent = __decorate([
            core_1.Component({
                selector: 'side-nav',
                templateUrl: './app.side-nav.html',
                styleUrls: ['./app.side-nav.css']
            })
        ], SideNavComponent);
        return SideNavComponent;
    }());
    exports.SideNavComponent = SideNavComponent;
});
//# sourceMappingURL=app.side-nav.component.js.map