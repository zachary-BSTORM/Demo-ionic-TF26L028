import { Component } from '@angular/core';
import { IonHeader, IonContent, IonBackButton, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonBackButton,IonButton],
})
export class HomePage {
  constructor() {}
}
