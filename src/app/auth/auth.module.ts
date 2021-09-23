import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesModule
  ]
})
export class AuthModule { }
