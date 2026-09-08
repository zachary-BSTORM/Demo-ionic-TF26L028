import { Component, computed, inject, signal } from '@angular/core';
import { MovieService } from '../../../core/movie-service/movie-service';
import { FavoriteService } from '../../../core/favorite-service/favorite-service';
import { Movie } from '../movies-model';

import { IonHeader, IonContent, IonBackButton, IonList, IonThumbnail, IonItem, IonLabel, NavController, SearchbarCustomEvent, IonSearchbar, IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { starOutline } from 'ionicons/icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  imports: [IonIcon, IonItemOption, IonItemOptions, 
    IonHeader,
    IonContent,
    IonBackButton,
    IonList,
    IonThumbnail,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonButton,
    IonItemSliding
],
})
export class MoviesComponent  {

  // nav permet de remplacer le router avec ionic
  private nav = inject(NavController)

  private movieService = inject(MovieService)
  movies = this.movieService.getMovies()

  constructor(){
    addIcons({starOutline})
  }
  
  // valeur de la barre de recherche
  searchValue = signal<string>('')
  
  
  navigateToDetails(id : number){
    this.nav.navigateForward(['details-movie',id])
  }
  
  // computed signal , se mets à jour en fonction de la valeur de searchValue
  filteredMovies = computed(() =>{
    // si la taille de searchValue est inférieur à 1 caractère on renvoie la liste complète
    if(this.searchValue().length < 1){
      return this.movies()
    }
    
    // sinon on renvoie la liste filtré
    return this.movies().filter( m => m.title.toLowerCase().includes(this.searchValue()))
  } 
)

  // la methode qui récupère la valeur de la barre de recherche transmise au travers d'un evenement
  getSearchValue(ev : SearchbarCustomEvent){
    const value = ev.detail.value ?? ''
    
    this.searchValue.set(value.toLowerCase())    
  }
  // ===========================================================================================

  // injection de favoriteService
  private favoriteService = inject(FavoriteService)

  addToFavorite(newFavorite : Movie){
    this.favoriteService.addToFavorite(newFavorite)
    // this.nav.navigateForward(['/favorites'])
  }
}
