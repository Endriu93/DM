import {ComponentFactoryResolver, Injectable, ViewContainerRef} from "@angular/core";

@Injectable()
export class DynamicComponentService {

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public loadComponent(component: any, host: DynamicComponentDirective): any {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

        let viewContainerRef = host.viewContainerRef;
        viewContainerRef.clear();

        return viewContainerRef.createComponent(componentFactory);
    }

}

export interface DynamicComponentDirective {
    viewContainerRef: ViewContainerRef
}