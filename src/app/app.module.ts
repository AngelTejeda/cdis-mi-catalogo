import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewsComponent } from './components/views/views.component';
import { ListComponent } from './components/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewsComponent,
    ListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
