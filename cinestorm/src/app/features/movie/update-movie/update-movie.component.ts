import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonContent, IonBackButton, NavController, IonInput, IonTextarea, IonButton } from "@ionic/angular";
import { MovieService } from '../../../core/movie-service/movie-service';
import { ActivatedRoute } from '@angular/router';
import { UpdateMovie } from '../movies-model';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton, ReactiveFormsModule, IonInput, IonTextarea, IonButton],
})
export class UpdateMovieComponent  implements OnInit {

  // nécéssite un formulaire
updateForm = new FormGroup({
  title : new FormControl('',[Validators.required,Validators.minLength(3)]),
  description : new FormControl('',[Validators.required,Validators.maxLength(100)]),
  imageUrl : new FormControl('')
})

private id = signal(0)

  // injection du service
  private movieService = inject(MovieService)

  // injection de l'activatedRoute
  private activRoute = inject(ActivatedRoute)

  private nav = inject(NavController)

  ngOnInit() {
    // récupération de l'id par la route
    const idFromRoute = +this.activRoute.snapshot.params['id']

    this.id.set(idFromRoute)
    // récupération de l'objet à modifier par le service
    const movie = this.movieService.getMovieById(idFromRoute)

    // affecter les valeurs à votre fomulaires
    this.updateForm.patchValue(movie)
  }


  // methode pour soumettre la mise à jour
  updateMovie(){
    if(this.updateForm.invalid)
    {
      return
    }

    const updatedMovie = this.updateForm.value as UpdateMovie
    updatedMovie.id = this.id()
    
    this.movieService.updateMovie(updatedMovie)

    this.nav.navigateForward('/movies')
  }
}
