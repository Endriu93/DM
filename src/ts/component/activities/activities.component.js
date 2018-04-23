var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActivitiesComponent = /** @class */ (function () {
        function ActivitiesComponent() {
            this.documents = [
                { name: 'Dokument1', icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added' },
                { name: 'Dokument2', icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added' },
                { name: 'Dokument3', icon: 'event', date: '2017-05-05', user: 'User 11', action: 'usunął', actionClass: 'bold deleted' },
                { name: 'Dokument3', icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added' }
            ];
        }
        ActivitiesComponent = __decorate([
            core_1.Component({
                selector: 'activitiess',
                templateUrl: './activities.html',
                styleUrls: ['./activities.css']
            })
        ], ActivitiesComponent);
        return ActivitiesComponent;
    }());
    exports.ActivitiesComponent = ActivitiesComponent;
});
//# sourceMappingURL=activities.component.js.map