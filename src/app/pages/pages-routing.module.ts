import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { ListadoEmpleadoComponent } from './pages/empleado/listado-empleado/listado-empleado.component';
import { ReporteEmpleadoComponent } from './pages/empleado/reporte-empleado/reporte-empleado.component';
import { MainPagesComponent } from './pages/main-pages.component';

const routes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
    children: [
       { path: '', component: DashboardComponent },
       { path: 'listado', component: ListadoEmpleadoComponent },
       { path: 'empleado', component: EmpleadoComponent },
       { path: 'empleado/actualizar/:id', component: EmpleadoComponent },
       { path: 'reporte/:id', component: ReporteEmpleadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
