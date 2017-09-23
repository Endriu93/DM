import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[top-host]',
})
export class TopHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}



