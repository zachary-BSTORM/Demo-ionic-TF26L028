import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet , RouterLink,IonMenu,IonHeader,IonTitle,IonContent,IonList,IonMenuToggle,IonItem],
})
export class AppComponent {
  constructor() {}
}
