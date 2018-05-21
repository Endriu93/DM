import {Directive, ViewContainerRef} from '@angular/core';
import {DynamicComponentDirective} from "../service/view/DynamicComponentService";

@Directive({
    selector: '[top-host]',
})
export class TopHostDirective implements DynamicComponentDirective{
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}



