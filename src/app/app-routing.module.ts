import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'auth', 
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
     path: 'dashboard',
     loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
     // runGuardsAndResolvers: 'always'
    },
    // { path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
