import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'dieta',
        loadComponent: () =>
          import('../dieta/dieta.page').then((m) => m.DietaPage),
      },
      {
        path: 'receita',
        loadComponent: () =>
          import('../receita/receita.page').then((m) => m.ReceitaPage),
      },
      {
        path: 'treino',
        loadComponent: () =>
          import('../treino/treino.page').then((m) => m.TreinoPage),
      },
      {
        path: '',
        redirectTo: '/tabs/dieta',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
