import { Component, OnInit, signal } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader , IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { heart , trash,camera} from 'ionicons/icons';

@Component({
  selector: 'app-balises',
  templateUrl: './balises.component.html',
  styleUrls: ['./balises.component.scss'],
  imports: [IonHeader,IonContent,IonCard,IonCardHeader,IonCardContent,IonButton,IonIcon],
})
export class BalisesComponent{

  
  showInfo(){
    console.log("hello ionic")
  }
  
  isDisabled = signal(true)
  toggleButton(){
    this.isDisabled.update((v) => !v)
  }


  constructor(){
    addIcons({heart,trash,camera})
  }
}
