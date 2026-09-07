import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IonHeader, IonContent, IonBackButton, IonList, IonThumbnail, IonItem, IonLabel, NavController, SearchbarCustomEvent, IonSearchbar } from "@ionic/angular";
import { Movie } from '../movies-model';
import { MovieService } from '../../../core/movie-service/movie-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton, IonList, IonThumbnail, IonItem, IonLabel, IonSearchbar],
})
export class MoviesComponent  implements OnInit {

  // nav permet de remplacer le router avec ionic
  private nav = inject(NavController)

  private movieService = inject(MovieService)
  movies = this.movieService.getMovies()

  // valeur de la barre de recherche
  searchValue = signal<string>('')
  
  

  ngOnInit() {
    // au chargement du composant on récupère la liste depuis le service
    this.movies = this.movieService.getMovies()
  }

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

}
