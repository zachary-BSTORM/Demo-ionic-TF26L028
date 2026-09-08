import { Service, signal } from '@angular/core';
import { Movie } from '../../features/movie/movies-model';

@Service()
export class FavoriteService {

    favorites = signal<Movie[]>([])

    favoritesIds = signal<number[]>([])

    addToFavorite(newFavorite : Movie){
        const index = this.favorites().findIndex(m => m.id == newFavorite.id)
        if(index != -1){
            return
        }
        this.favorites.update(list => [...list, newFavorite])
    }

    removeToFavorite(id : number){
        this.favorites.update(list => list.filter(m => m.id !== id))
    } 
    
    getAllFavorites(){
        return this.favorites
    }
    
    // avec number-------------------------------------------------------
    addToFavoriteNumber(newFavorite : number){
        this.favoritesIds.update(list => [...list, newFavorite])
    }
    removeToFavoriteNumber(id : number){
        this.favoritesIds.update(list => list.filter(m => m !== id))
    }
    getAllFavoritesNumber(){
        return this.favoritesIds
    }
}
