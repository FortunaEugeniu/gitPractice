'use strict';

// const numbersOfFilms = +prompt('How many films did you watched5');

// const personalMovieDB = {
// 	count: numbersOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// const a = prompt('One of the films which you watched?'),
// 	b = prompt('Give it film rating pls'),
// 	c = prompt('One of the films which you watched?'),
// 	d = prompt('Give it film rating pls');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (let i of arr) {
// 	console.log(i);
// }

// arr.forEach(el => console.log(el));

// COPY OBJECTS

let obj1 = {
	a: 1,
	b: 2,
	c: {
		y: 50,
		z: 100,
	},
};

let obj2 = { ...obj1 };
obj2.a = 5;

let obj3 = Object.assign({}, obj1);

obj3.b = 15;

console.log(obj1);
console.log(obj2);
console.log(obj3);
