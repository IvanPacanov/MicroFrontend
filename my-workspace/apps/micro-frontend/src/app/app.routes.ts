import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'hobby',
    loadChildren: () => import('hobby/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'projects',
    loadChildren: () => import('projects/Routes').then((m) => m!.remoteRoutes),
  },
  
];
