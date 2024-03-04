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
// const nameuser = "Alex";
// console.log(`Привет ${nameuser}`);

// унарный плюс
// const testnum = 5;
// const strtest = +"5"; // превращяет тип строки в число или NaN (Not-A-Number)
// console.log(testnum + strtest);

// префиксный постфиксный инкремент
// let incr = 10,
// 	decr = 10;

// постфиксный
// console.log(incr++); // 10
// console.log(decr--); // 10
// // и только потом они становятся 11 и 9

// префиксный
// console.log(++incr); // 11
// console.log(--decr); // 9


// остаток от деления 
// console.log(5%2); // 1

// строгое сранвение
// console.log(2*4 == "8"); // == true даже строку и число 
// console.log(2*4 === "8"); // === false строка не является числом NaN

// пример сравнений
// Выполняется ли условие?
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
// 	console.log("Done!");
// }
