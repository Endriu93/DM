import { NgModule } from '@angular/core';
// don't know why, but is required
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from '../component/MainComponent';
import {MainService} from "../serviceAbstract/MainService";
import {MainServiceImpl} from "../service/MainServiceImpl";
import {TopHostDirective} from "../directive/TopHostDirective";
import {LoginComponent} from "../component/login/LoginComponent";
import {DashboardComponent} from "../component/dashboard/DashboardComponent";
import {DocumentsComponent} from "../component/documents/DocumentsComponent"
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {BrowserAnimationsModule} from '@angular/platform-browser';
// import {MaterialModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {SideNavComponent} from "../component/side-nav/app.side-nav.component";
import {ToolbarComponent} from "../component/toolbar/toolbar.component";
import {DocumentsSearchComponent} from "../component/documents-search/documents-search.component";
import {ActivitiesComponent} from "../component/activities/activities.component";
import {DocumentAddButton, DocumentAddDialog} from "../component/add_document/document_add.component";
import {SelectCategoryComponent} from "../component/add_document/select_category/select_category.component";
import {PanelComponent} from "../component/panel/app.panel.component";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports:      [ BrowserModule, MatButtonModule, BrowserAnimationsModule , MatInputModule, MatCardModule, MatGridListModule,
    MatDialogModule, MatCheckboxModule, MatSelectModule, FormsModule,MatIconModule,MatListModule, MatToolbarModule ],
  // here we place all used components in appliation
  declarations: [ MainComponent,TopHostDirective, LoginComponent, DashboardComponent,
    SideNavComponent, DocumentsComponent, ToolbarComponent, DocumentsSearchComponent, ActivitiesComponent
    , DocumentAddButton, DocumentAddDialog, SelectCategoryComponent, PanelComponent ],
  // component, which will bootstrap index.html
  bootstrap:    [ MainComponent ],
  providers: [{provide: MainService, useClass:MainServiceImpl}],
  entryComponents: [LoginComponent, DashboardComponent]
})
export class AppModule {

}
