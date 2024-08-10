let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели","");

const perosnalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

let lastFilm = prompt("Один из последних просмотренных фильмов","");
let rating = prompt("На сколько оцените его?");

perosnalMovieDB.movies[lastFilm] = rating;

console.log(perosnalMovieDB);