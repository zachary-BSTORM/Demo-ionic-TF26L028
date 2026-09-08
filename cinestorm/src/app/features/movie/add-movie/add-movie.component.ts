import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonBackButton, NavController, IonCard, IonInput, IonLabel, IonTextarea, IonButton, IonCardHeader, IonCardContent, IonCardSubtitle } from '@ionic/angular';
import { MovieService } from '../../../core/movie-service/movie-service';
import { CreateMovie } from '../movies-model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  // nécéssite un import
  imports: [IonHeader, IonContent, IonBackButton, IonCard, IonInput, IonLabel, IonTextarea, ReactiveFormsModule, IonButton, IonCardHeader, IonCardContent, IonCardSubtitle],
})

export class AddMovieComponent {

  // construire le formulaire
formMovie = new FormGroup({
  title : new FormControl('',[Validators.required,Validators.minLength(3)]),
  description : new FormControl('',[Validators.required,Validators.maxLength(100)]),
  year : new FormControl(0,[Validators.required,Validators.min(1950),Validators.max(2030)]),
  imageUrl : new FormControl('')
})

// injection du service movie
  private movieService = inject(MovieService)

  // injection du nav controller
  private nav = inject(NavController)

  // methode pour la soumission du formulaire
  onSubmit(){
    if(this.formMovie.valid){
      const valueForm = this.formMovie.value as CreateMovie
      
      this.movieService.addMovie(valueForm)

      this.nav.navigateForward(['/movies'])
    }
    
  }
}