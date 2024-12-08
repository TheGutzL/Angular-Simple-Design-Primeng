import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/features/shell/home.routes'),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
