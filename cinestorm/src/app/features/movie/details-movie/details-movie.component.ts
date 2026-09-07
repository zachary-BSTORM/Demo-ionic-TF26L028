import { Component, inject, OnInit, signal } from '@angular/core';
import { IonHeader, IonContent, IonBackButton } from "@ionic/angular";
import { Movie } from '../movies-model';
import { MovieService } from '../../../core/movie-service/movie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton],
})
export class DetailsMovieComponent  implements OnInit {

  movie = signal<Movie | null>(null)

  private movieService = inject(MovieService)
  private activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']

    this.movie.set(this.movieService.getMovieById(id))
  }

}
