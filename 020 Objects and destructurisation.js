'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
};

console.log(options.name);

for (let key in options) {
	if (typeof options[key] === 'object') {
		for (let i in options[key]) {
			console.log(`Property ${i} has ${options[key][i]}`);
		}
	} else {
		console.log(`Property ${key} has ${options[key]}`);
	}
}
console.log(Object.keys(options).length);

const eugeniu = {
	name: 'Eugeniu',
	height: 1.87,
	weight: 85,
	birth_day: '07/01/1997',
	location: 'Chisinau',
	profession: 'Web Developer, Animator',
	marred: false,
	objectLength: function () {
		return Object.keys(eugeniu).length;
	},
};

console.log(eugeniu.objectLength());

const { name, weight } = eugeniu;

console.log(name);
console.log(weight);
