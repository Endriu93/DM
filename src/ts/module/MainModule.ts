import {NgModule} from "@angular/core";
// don't know why, but is required
import {BrowserModule} from "@angular/platform-browser";
import {MainComponent} from "../component/MainComponent";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "../component/login/login.component";
import {DashboardComponent} from "../component/dashboard/dashboard.component";
import {DocumentsComponent} from "../component/documents/documents.component";
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {SideNavComponent} from "../component/side-nav/side-nav.component";
import {ToolbarComponent} from "../component/toolbar/toolbar.component";
import {DocumentsSearchComponent} from "../component/documents-search/documents-search.component";
import {ActivitiesComponent} from "../component/activities/activities.component";
import {DocumentAddButton, DocumentAddDialog} from "../component/add_document/document_add.component";
import {SelectCategoryComponent} from "../component/add_document/select_category/select_category.component";
import {PanelComponent} from "../component/panel/app.panel.component";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HttpClientModule} from "@angular/common/http";
import {RestConfig} from "../service/rest/RestConfig";
import {RestService} from "../service/rest/RestService";
import {AuthService} from "../service/view/AuthService";
import {RestConfigLocal} from "../service/rest/RestConfigLocal";
import {DashHostDirective} from "../directive/DashHostDirective";
import {DynamicComponentService} from "../service/view/DynamicComponentService";
import {UsersComponent} from "../component/users/users.component";


@NgModule({
    imports: [
        BrowserModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSelectModule,
        FormsModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        HttpClientModule
    ],
    // here we place all used components in appliation
    declarations: [
        MainComponent,
        TopHostDirective,
        LoginComponent,
        DashboardComponent,
        SideNavComponent,
        DocumentsComponent,
        ToolbarComponent,
        DocumentsSearchComponent,
        ActivitiesComponent,
        DocumentAddButton,
        DocumentAddDialog,
        SelectCategoryComponent,
        PanelComponent,
        DashHostDirective,
        UsersComponent
    ],
    // component, which will bootstrap index.html
    bootstrap: [MainComponent],
    providers: [
        {provide: AuthService, useClass: AuthService},
        {provide: RestConfig, useClass: RestConfigLocal},
        {provide: RestService, useClass: RestService},
        {provide: DynamicComponentService, useClass: DynamicComponentService},
    ],
    entryComponents: [
        LoginComponent,
        DashboardComponent,
        DocumentsComponent,
        ActivitiesComponent,
        UsersComponent
    ]
})
export class AppModule {

}
