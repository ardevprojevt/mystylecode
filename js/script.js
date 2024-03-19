// позволяет писать чистый код, не даст писать код без объявленых переменных
// Вы можете использовать строгий режим во всех своих программах. 
// Это помогает вам писать более чистый код, например, предотвращает использование необъявленных переменных. «use strict» — это просто строка, поэтому IE 9 не выдаст ошибку, даже если он ее не понимает.
"use strict";

// названия переменных 
// sanke_case
// UPPER_SNAKE_CASE
// _apiBase = '';
// Kebab-case
// PascalCase

// интерполяция
const nameuser = "Alex";
console.log(`Привет ${nameuser}`);

// унарный плюс
const testnum = 5;
const strtest = +"5"; // превращяет тип строки в число или NaN (Not-A-Number)
console.log(testnum + strtest);

// префиксный постфиксный инкремент
let incr = 10,
	decr = 10;

// постфиксный
console.log(incr++); // 10
console.log(decr--); // 10
// и только потом они становятся 11 и 9

// префиксный
console.log(++incr); // 11
console.log(--decr); // 9


// остаток от деления 
console.log(5%2); // 1

// строгое сранвение
console.log(2*4 == "8"); // == true даже строку и число 
console.log(2*4 === "8"); // === false строка не является числом NaN

// пример сравнений
// Выполняется ли условие?
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
	console.log("Done!");
}



// Drawing with for..
//    *
//   ***
//  *****
// *******
//*********

const lineStars = 6;
const plusStars = 2;
let result = "";
let startStars = 1;

for (let i = lineStars; i >= 2; i--) {
	 
	for (let space = 0; space < i; space++) {
		
		result += " ";

		if(space === (i-2)){
			
			
			for (let s = 0; s < startStars; s++) {
				result += "*";
			}
			result += "\n";
			startStars += plusStars;

			break;
		} 
	}

	
}
for (let s = 0; s < startStars; s++) {
	result += "*";
}
result += "\n";
console.log(result);


// Место для третьей задачи
function getMathResult(a, b) {
	if(typeof(b) == "number" && b > 0){
		let plusnum = a; 
		let res = "";
		
		for (var i = 0; i < b; i++) {
			
			if(i != b-1){
				res += plusnum + "---";
			}else{
				res += plusnum;
			}
			plusnum += a;           
		}
		return res;
	}else{
		return a;
	}
}

console.log( getMathResult(5, 3) );

// динамическое программирование снизу вверх.
function fib(num) {
	if (typeof(num) !== "number" || num <= 0 || !Number.isInteger(num)) {
		return "";
	}

	let result = "";
	let first = 0;
	let second = 1;

	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`;
			// Без пробела в конце
		} else {
			result += `${first} `;
		}

		let third = first + second;
		first = second;
		second = third;
	}

	return result;
}

console.log(fib(7));

// callback fn
function learnJS(lang, callback){
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log("Я прошел этот урок!");
}

learnJS("JavaScript", done);

// Объекты, деструктуризация объектов (ES6)

const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: "red"
	},
	makeTest: function () {
		console.log("Test");
	}
};

const {border, bg} = options.colors;

console.log(border);

options.makeTest();
console.log(Object.keys(options).length);

console.log(options.name);
delete options.name;
console.log(options);

//for (let key of options) of не может работать с объектами 
let counter = 0;
for (let key in options) {
	if (typeof(options[key]) === "object"){
		for (let i in options[key]){
		    console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
		
	}else{
		console.log(`${key} имеет значние ${options[key]}`);
	}

	counter++;
	
}

console.log(counter);

const arr = [2,13,16,24,9,10];

const str = "1,12,25,2,5,45";
const prod = str.split(", ");
console.log(prod.join(";"));

arr.sort(compareNum);
console.log(arr); 
function compareNum(a, b){
	return a - b;
}

// Передача по ссылке или по значению, Spread оператор (ES6-ES9)
const add = {
	a: 1,
	b: 2
};

const clone = Object.assign({}, add);
clone.a = 2;
console.log(add);
console.log(clone);

// клонировать массив Spred operator
const arr = [1,23,45];
const newArr = arr.slice();
newArr[0] = 33;
console.log(arr);
console.log(newArr);

const video  = ['youtube', 'rutube'],
      blogs  = ['wp', 'lj', 'blogger'],
      allarr = [...video, ...blogs, 'vk', 'fb'];
console.log(allarr);