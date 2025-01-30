import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: 'desafio',
    loadComponent: () => import('./features/desafio/desafio.page').then( m => m.DesafioPage)
  }
];