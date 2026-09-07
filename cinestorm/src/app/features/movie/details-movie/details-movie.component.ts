import { Component, inject, OnInit, signal } from '@angular/core';
import { IonHeader, IonContent, IonBackButton, IonCardHeader, IonCard, IonCardContent, NavController, IonButton } from "@ionic/angular";
import { Movie } from '../movies-model';
import { MovieService } from '../../../core/movie-service/movie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton,IonCardHeader,IonCard,IonCardContent,IonButton],
})
export class DetailsMovieComponent  implements OnInit {

  movie = signal<Movie | null>(null)
  id = signal(-1)

  private movieService = inject(MovieService)
  private activatedRoute = inject(ActivatedRoute)

  private nav = inject(NavController)

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.id.set(id)
    this.movie.set(this.movieService.getMovieById(id))
  }

  navigateToUpdate(){
    this.nav.navigateForward(['update-movie',this.id()])
  }

}
