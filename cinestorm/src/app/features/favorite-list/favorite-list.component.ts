import { Component, inject, OnInit, signal } from '@angular/core';
import { FavoriteService } from '../../core/favorite-service/favorite-service';
import { IonHeader, IonContent, IonList, IonItem, IonCard, IonCardHeader, IonCardContent,IonButton,IonBackButton, IonItemSliding, IonItemOption,IonIcon ,IonItemOptions} from "@ionic/angular";
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
  imports: [IonBackButton, IonButton, IonItemOptions, IonIcon, IonItemOption, IonHeader, IonContent, IonList, IonCard, IonCardHeader, IonCardContent, IonItemSliding, IonItem],
})
export class FavoriteListComponent {

  private favoriteService = inject(FavoriteService)

  favorites = this.favoriteService.getAllFavorites()

  constructor(){
    addIcons({trash})
  }

  removeFavorite(id : number){
    this.favoriteService.removeToFavorite(id)
  }
}
