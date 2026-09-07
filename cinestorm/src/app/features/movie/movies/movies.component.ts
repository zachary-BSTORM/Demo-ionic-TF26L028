import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonBackButton } from "@ionic/angular";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  imports: [IonHeader, IonContent, IonBackButton],
})
export class MoviesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
