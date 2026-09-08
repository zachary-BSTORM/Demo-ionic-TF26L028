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
    path : 'balises',
    loadComponent : () => import('./balises/balises.component').then((c) => c.BalisesComponent)
  },
  {
    path : 'forms',
    loadComponent : () => import('./forms/forms.component').then((c) => c.FormsComponent)
  },
  {
    path : 'movies',
    loadComponent : () => import('./features/movie/movies/movies.component').then((c) => c.MoviesComponent)
  },
    {
    path : 'add-movie',
    loadComponent : () => import('./features/movie//add-movie/add-movie.component').then((c) => c.AddMovieComponent)
  },
    {
    path : 'details-movie/:id',
    loadComponent : () => import('./features/movie//details-movie/details-movie.component').then((c) => c.DetailsMovieComponent)
  },
    {
    path : 'update-movie/:id',
    loadComponent : () => import('./features/movie//update-movie/update-movie.component').then((c) => c.UpdateMovieComponent)
  },
  {
    path : 'favorites',
    loadComponent : () => import('./features/favorite-list/favorite-list.component').then(c => c.FavoriteListComponent)
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
];
