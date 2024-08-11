let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели","");


const perosnalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

if(perosnalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (perosnalMovieDB.count >= 10 && perosnalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else  if (perosnalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

let lastFilm,rating;
for(let i = 0; i < 2; i++){
    lastFilm = prompt("Один из последних просмотренных фильмов","");
    rating = prompt("На сколько оцените его?");
    if(lastFilm != null && rating != null && lastFilm != "" && rating != "" && lastFilm.length < 50){
        perosnalMovieDB.movies[lastFilm] = rating;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    
}

console.log(perosnalMovieDB);
