'use strict'

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели","");
    }
}

start();

const perosnalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let lastFilm = prompt("Один из последних просмотренных фильмов","");
        let rating = prompt("На сколько оцените его?");
        if(lastFilm != null && rating != null && lastFilm != "" && rating != "" && lastFilm.length < 50){
            perosnalMovieDB.movies[lastFilm] = rating;
            console.log("done");
        } else {
            console.log("error");
            i--;
        } 
    } 
}

rememberMyFilms()

function detectPersonalLevel(){
    if(perosnalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (perosnalMovieDB.count >= 10 && perosnalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else  if (perosnalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    } 
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(perosnalMovieDB);
    }
}

showMyDB(perosnalMovieDB.privat);

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        perosnalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,"")
    }
}

writeYourGenres();

console.log(perosnalMovieDB);
