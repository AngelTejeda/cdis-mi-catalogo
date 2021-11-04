import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/content/page-not-found/page-not-found.component';
import { ListComponent } from './components/content/list/list.component';
import { TableComponent } from './components/content/table/table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
