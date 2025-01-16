const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

let a, b;

for (i = 0; i < 2; i++) {
    a = prompt("Один из просмотренных фильмов?", "");
    b = prompt("На сколько оцените его?", "");
    console.log(a);
    if (!a || !a.length || a.length > 50) {
        console.log(1);
        i--;
    } else {
        personalMovieDB.movies[a] = b;
    }
}
console.log(personalMovieDB.movies);
console.log(personalMovieDB);
