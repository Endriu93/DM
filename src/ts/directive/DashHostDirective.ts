import {Directive, ViewContainerRef} from '@angular/core';
import {DynamicComponentDirective} from "../service/impl/DynamicComponentService";

@Directive({
    selector: '[dash-host]',
})
export class DashHostDirective implements DynamicComponentDirective{
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}



