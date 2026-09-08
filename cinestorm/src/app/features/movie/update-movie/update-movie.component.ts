import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonBackButton } from "@ionic/angular";

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton],
})
export class UpdateMovieComponent  implements OnInit {

  // nécéssite un formulaire


  // injection du service

  // injection de l'activatedRoute

  constructor() { }

  ngOnInit() {
    // récupération de l'id par la route

    // récupération de l'objet à modifier par le service


    // affecter les valeurs à votre fomulaires
  }


  // methode pour soumettre la mise à jour
}
