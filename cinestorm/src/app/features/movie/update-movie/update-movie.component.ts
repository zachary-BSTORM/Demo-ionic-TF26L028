import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonBackButton } from "@ionic/angular";

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton],
})
export class UpdateMovieComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
