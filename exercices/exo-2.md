# Exercice 2

- Implémenter un favoriteService

    - une liste de favoris
        - choix 1 ( logique plus lourde) : enregistrer les ids des favoris , 
                                            et vous récupérer les favoris  grace à leurs id

        - choix 2 (plus simple) : une liste de Movie 

    - methodes dans le favoritesService
        - getAllFavorites()

        - addFavorite() id ? movie

        - deleteFavorite(id)


- Ajouter un composant liste des favoris
     - le rendre accessible depuis la sidebar
     - un boutton détails qui redirige vers la page détails
     - un boutton delete qui supprime le movie des favoris

- Ajouter sur la page movies-details 
    - un boutton : addToFavorites
    - injection du favorites service