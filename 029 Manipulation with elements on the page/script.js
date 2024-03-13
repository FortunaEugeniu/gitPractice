'use strict';

const box = document.querySelector('#box'),
	btn = document.querySelectorAll('button'),
	circles = document.querySelectorAll('.circle'),
	hearts = document.querySelectorAll('.heart');

console.log(box);

console.log(btn);
console.log(btn[1]);

console.log(circles);
console.log(circles[1]);

console.log(hearts);
console.log(hearts[1]);

hearts.forEach(el => console.log(el));
