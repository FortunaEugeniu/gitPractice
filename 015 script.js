/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numbersOfFilms = +prompt('How many films did you watched5');

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	const a = prompt('One of the films which you watched?'),
		b = prompt('Give it film rating pls');
	if (a.length <= 50 && a != null && a != '') {
		personalMovieDB.movies[a] = b;
	} else {
		console.log('ERROR');
		i--;
	}
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

console.log(personalMovieDB);
