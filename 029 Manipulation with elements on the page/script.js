'use strict';

const box = document.querySelector('#box'),
	btns = document.querySelectorAll('button'),
	circles = document.querySelectorAll('.circle'),
	hearts = document.querySelectorAll('.heart'),
	oneHerat = document.querySelector('.heart'),
	wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'purple';
box.style.width = '250px';
box.style.height = '250px';

btns.forEach(el => (el.style.borderRadius = '100px'));

circles[0].style.backgroundColor = 'red';
circles[1].style.backgroundColor = 'yellow';
circles[2].style.backgroundColor = 'green';

const div = document.createElement('div');
const text = document.createTextNode('I was here'); // rarely used

div.classList.add('black');

wrapper.append(div);
// wrapper.before(div);
// circles[0].remove();

// hearts[0].replaceWith(circles[2]);

// div.innerHTML = 'JOOPA';
// div.style.fontSize = '3rem';

div.textContent = 'Hello';
