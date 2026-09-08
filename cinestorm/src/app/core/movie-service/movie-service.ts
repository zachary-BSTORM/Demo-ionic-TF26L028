import { Service, signal } from '@angular/core';
import { CreateMovie, Movie, UpdateMovie } from '../../features/movie/movies-model';

@Service()
export class MovieService {

    movies = signal<Movie[]>([
    {
        id : 1,
        title : "Spider-Man",
        description : "Un lycéen obtient les pouvoirs d'une araignée après une morsure radioactive",
        year : 2002,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg"
    },
    {
        id : 2,
        title : "Inception",
        description : "Un voleur infiltre les rêves pour implanter une idée dans un esprit",
        year : 2010,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
        id : 3,
        title : "Interstellar",
        description : "Des astronautes traversent un trou de ver pour sauver l'humanité",
        year : 2014,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },
    {
        id : 4,
        title : "The Dark Knight",
        description : "Batman affronte le Joker, un criminel qui veut plonger Gotham dans le chaos",
        year : 2008,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
    },
    {
        id : 5,
        title : "Le Fabuleux Destin d'Amélie Poulain",
        description : "Une serveuse de Montmartre décide de faire le bien autour d'elle en secret",
        year : 2001,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/5/53/Amelie_poster.jpg"
    },
    {
        id : 6,
        title : "Intouchables",
        description : "Un aristocrate tétraplégique engage un aide à domicile venu de banlieue",
        year : 2011,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/9/93/The_Intouchables.jpg"
    },
    {
        id : 7,
        title : "Le Roi Lion",
        description : "Un lionceau héritier du trône fuit après la mort de son père",
        year : 1994,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
    },
    {
        id : 8,
        title : "Retour vers le futur",
        description : "Un adolescent remonte en 1955 à bord d'une DeLorean transformée en machine temporelle",
        year : 1985,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg"
    },
    {
        id : 9,
        title : "Matrix",
        description : "Un hacker découvre que la réalité est une simulation contrôlée par les machines",
        year : 1999,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png"
    },
    {
        id : 10,
        title : "Jurassic Park",
        description : "Un parc peuplé de dinosaures clonés tourne au cauchemar",
        year : 1993,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
    },
    {
        id : 11,
        title : "Titanic",
        description : "Une romance impossible à bord du paquebot le plus célèbre de l'histoire",
        year : 1997,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png"
    },
    {
        id : 12,
        title : "Le Seigneur des anneaux : La Communauté de l'anneau",
        description : "Un hobbit hérite d'un anneau qu'il doit détruire au cœur du Mordor",
        year : 2001,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg"
    },
    {
        id : 13,
        title : "Harry Potter à l'école des sorciers",
        description : "Un orphelin découvre qu'il est sorcier et entre à Poudlard",
        year : 2001,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/330px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg"
    },
    {
        id : 14,
        title : "Gladiator",
        description : "Un général romain trahi devient gladiateur pour se venger",
        year : 2000,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
    },
    {
        id : 15,
        title : "Forrest Gump",
        description : "Un homme simple traverse malgré lui l'histoire américaine",
        year : 1994,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
    },
    {
        id : 16,
        title : "Pulp Fiction",
        description : "Destins croisés de tueurs, boxeurs et truands à Los Angeles",
        year : 1994,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
    },
    {
        id : 17,
        title : "Le Cinquième Élément",
        description : "Un chauffeur de taxi du futur doit sauver la Terre avec une mystérieuse jeune femme",
        year : 1997,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/6/65/Fifth_element_poster_%281997%29.jpg"
    },
    {
        id : 18,
        title : "Toy Story",
        description : "Les jouets d'un enfant prennent vie dès qu'il a le dos tourné",
        year : 1995,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
    },
    {
        id : 19,
        title : "Avatar",
        description : "Un marine paraplégique explore Pandora dans un corps d'emprunt",
        year : 2009,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
    },
    {
        id : 20,
        title : "Star Wars : Un nouvel espoir",
        description : "Un jeune fermier rejoint la rébellion contre l'Empire galactique",
        year : 1977,
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
    }
])
    lastId = signal<number>(20)

    getMovies(){
        return this.movies
    }

    getMovieById(id : number){
        const movie = this.movies().find(m => m.id == id)

        if(!movie){
            throw new Error('Aucun film avec cet id')
        }

        return movie
    }

    addMovie(newMovie : CreateMovie){
        const movieToAdd : Movie = {
            id : this.lastId() + 1,
            title : newMovie.title,
            description : newMovie.description,
            year : newMovie.year,
            imageUrl : newMovie.imageUrl
        }

        this.movies.update((list) => [...list,movieToAdd])
        this.lastId.update((value) => value += 1)
    }

    updateMovie(updatedMovie : UpdateMovie){
        this.movies.update((list) =>  
             list.map(m => m.id === updatedMovie.id ? 
                {
                    id : updatedMovie.id,
                    title : updatedMovie.title,
                    description : updatedMovie.description,
                    year : m.year,
                    imageUrl : updatedMovie.imageUrl
                }
                : m)
         
        )

        
    }

    deleteMovie(id : number){
        this.movies.update(list => list.filter(m => m.id !== id))
    }
}
