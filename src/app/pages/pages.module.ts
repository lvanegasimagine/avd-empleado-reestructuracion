import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MainPagesComponent } from './pages/main-pages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { ListadoEmpleadoComponent } from './pages/empleado/listado-empleado/listado-empleado.component';
import { ReporteEmpleadoComponent } from './pages/empleado/reporte-empleado/reporte-empleado.component';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    MainPagesComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    EmpleadoComponent,
    ListadoEmpleadoComponent,
    ReporteEmpleadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
