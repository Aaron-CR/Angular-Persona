import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./features/persona/persona.module')
      .then(m => m.PersonaModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./features/not-found/not-found.module')
      .then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'not-found', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
