/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {
// 		this.count = +prompt('How many films did you watched?');

// 		while (this.count == '' || this.count == null || isNaN(this.count)) {
// 			this.count = +prompt('How many films did you watched?');
// 		}
// 	},
// 	rememberMyFilms: function () {
// 		for (let i = 0; i < 2; i++) {
// 			const a = prompt('One of the films which you watched?'),
// 				b = prompt('Give it film rating pls');
// 			if (a.length <= 50 && a != null && a != '') {
// 				this.movies[a] = b;
// 			} else {
// 				console.log('ERROR');
// 				i--;
// 			}
// 		}
// 	},
// 	showMyDB: function () {
// 		this.privat === false ? console.log(this) : null;
// 	},
// 	writeYourGenres: function () {
// 		for (let i = 1; i <= 3; i++) {
// 			let genre = prompt(`What is your favorite genre on ${i} position?`);

// 			if (genre === '' || genre === null) {
// 				console.log('Something get wring, pleas try again');
// 				i--;
// 			} else {
// 				this.genres.push(genre);
// 			}
// 		}
// 		this.genres.forEach((el, index) => {
// 			console.log(`The favorite genre ${index + 1} is ${el}`);
// 		});
// 	},
// 	detectPersonalLevel: function () {
// 		switch (true) {
// 			case this.count < 10:
// 				console.log('You watched not enough movies');
// 				break;
// 			case this.count >= 10 && this.count <= 30:
// 				console.log('You are classic movie watcher');
// 				break;
// 			case this.count > 30:
// 				console.log('How much time do you have MOTHERFUCKER???');
// 				break;
// 			default:
// 				console.log('Something get wrong');
// 		}
// 	},
// 	toggleVisibleMyDB: function () {
// 		this.privat === false ? (this.privat = true) : (this.privat = false);
// 		this.showMyDB();
// 	},
// };
