/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numbersOfFilms;

function start() {
	numbersOfFilms = +prompt('How many films did you watched?');

	while (
		numbersOfFilms == '' ||
		numbersOfFilms == null ||
		isNaN(numbersOfFilms)
	) {
		numbersOfFilms = +prompt('How many films did you watched?');
	}
}
// start();

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function showMyDB(hidden) {
	hidden.privat === false ? console.log(personalMovieDB) : null;
}

showMyDB(personalMovieDB);

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('One of the films which you watched?'),
			b = prompt('Give it film rating pls');
		if (a.length <= 50 && a != null && a != '') {
			personalMovieDB.movies[a] = b;
		} else {
			console.log('ERROR');
			i--;
		}
	}
}

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres.push(
			prompt(`What is your favorite genre on ${i} position?`)
		);
	}
}

writeYourGenres();

function detectPersonalLevel() {
	switch (true) {
		case personalMovieDB.count < 10:
			console.log('You watched not enough movies');
			break;
		case personalMovieDB.count >= 10 && personalMovieDB.count <= 30:
			console.log('You are classic movie watcher');
			break;
		case personalMovieDB.count > 30:
			console.log('How much time do you have MOTHERFUCKER???');
			break;
		default:
			console.log('Something get wrong');
	}
}
