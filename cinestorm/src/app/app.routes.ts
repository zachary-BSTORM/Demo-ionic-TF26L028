import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'home', 
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage)
  },
  { 
    path : 'profile' , 
    loadComponent : () => import('./profile/profile.component').then((c) => c.ProfileComponent)
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
];
