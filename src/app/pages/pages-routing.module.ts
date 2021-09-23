import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';

const routes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
    children: [
       { path: '', component: DashboardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
