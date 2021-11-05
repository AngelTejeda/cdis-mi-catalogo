import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/head/header/header.component';
import { ViewsComponent } from './components/head/views/views.component';
import { ListComponent } from './components/content/list/list.component';
import { TableComponent } from './components/content/table/table.component';
import { PageNotFoundComponent } from './components/content/page-not-found/page-not-found.component';
import { ModalDetailsComponent } from './components/modals/modal-details/modal-details.component';
import { ModalEditComponent } from './components/modals/modal-edit/modal-edit.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ModelFormatPipe } from './pipes/model-format.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogComponent } from './components/content/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewsComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalDetailsComponent,
    ModalEditComponent,
    ModelFormatPipe,
    LogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxSliderModule,
    Ng2SearchPipeModule
  ],
  providers: [
    MatSnackBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
