import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonBackButton } from "@ionic/angular";

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton],
})
export class DetailsMovieComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
