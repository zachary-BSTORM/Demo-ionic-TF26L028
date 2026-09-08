import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonBackButton ,IonButton} from "@ionic/angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [IonButton, IonHeader, IonContent, IonBackButton],
})
export class ProfileComponent {

  constructor() { }

}
