import { Routes } from '@angular/router';

export default [
  {
    path: 'landing-page',
    loadComponent: () => import('../landing-page/landing-page.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('../about/about.component'),
  },
  {
    path: 'room',
    loadComponent: () => import('../room/room.component'),
  },
  {
    path: 'restaurant',
    loadComponent: () => import('../restaurant/restaurant.component'),
  },
  {
    path: 'activity',
    loadComponent: () => import('../activity/activity.component'),
  },
  {
    path: 'reservation',
    loadComponent: () => import('../reservation/reservation.component'),
  },
  {
    path: '**',
    redirectTo: 'landing-page',
  },
] as Routes;
