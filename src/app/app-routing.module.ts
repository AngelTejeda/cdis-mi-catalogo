import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';

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
