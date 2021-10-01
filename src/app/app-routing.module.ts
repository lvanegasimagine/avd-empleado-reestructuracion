import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
    {
      path: 'auth', 
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
     path: 'dashboard',
     loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
     canActivate: [ValidarTokenGuard],
     canLoad: [ValidarTokenGuard]
    },
    { path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
