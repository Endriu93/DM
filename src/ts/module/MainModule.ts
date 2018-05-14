import {NgModule} from '@angular/core';
// don't know why, but is required
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from '../component/MainComponent';
import {MainService} from "../service/MainService";
import {MainServiceImpl} from "../service/MainServiceImpl";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "../component/login/LoginComponent";
import {DashboardComponent} from "../component/dashboard/DashboardComponent";
import {DocumentsComponent} from "../component/documents/DocumentsComponent"
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SideNavComponent} from "../component/side-nav/SideNavComponent";
import {ToolbarComponent} from "../component/toolbar/toolbar.component";
import {DocumentsSearchComponent} from "../component/documents-search/documents-search.component";
import {ActivitiesComponent} from "../component/activities/activities.component";
import {DocumentAddButton, DocumentAddDialog} from "../component/add_document/document_add.component";
import {SelectCategoryComponent} from "../component/add_document/select_category/select_category.component";
import {PanelComponent} from "../component/panel/app.panel.component";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from "@angular/common/http";
import {RestConfig} from "../service/RestConfig";
import {RestConfigImpl} from "../service/RestConfigImpl";
import {RestService} from "../rest/RestService";

@NgModule({
    imports: [BrowserModule, MatButtonModule, BrowserAnimationsModule, MatInputModule, MatCardModule, MatGridListModule,
        MatDialogModule, MatCheckboxModule, MatSelectModule, FormsModule, MatIconModule, MatListModule, MatToolbarModule,
    MatSidenavModule,HttpClientModule],
    // here we place all used components in appliation
    declarations: [MainComponent, TopHostDirective, LoginComponent, DashboardComponent,
        SideNavComponent, DocumentsComponent, ToolbarComponent, DocumentsSearchComponent, ActivitiesComponent
        , DocumentAddButton, DocumentAddDialog, SelectCategoryComponent, PanelComponent],
    // component, which will bootstrap index.html
    bootstrap: [MainComponent],
    providers: [{provide: MainService, useClass: MainService},
        {provide: RestConfig, useClass: RestConfigImpl},{provide: RestService, useClass: RestService}],
    entryComponents: [LoginComponent, DashboardComponent]
})
export class AppModule {

}
