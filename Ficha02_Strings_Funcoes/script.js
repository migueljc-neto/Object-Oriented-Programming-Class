// exercicio 1

// const showInverse = function (string) {
//   return string.split(" ").reverse();
// };

// console.log(showInverse("a b c d"));

// exercicio 2 + 3
// const numCities = function (...cities) {
//   console.log(cities);

//   for (c of cities) {
//     console.log(c);
//   }
//   return cities.length;
// };

// console.log(numCities("a", "b", "c", "d", "e"));

// exercicio 4

// const showTabuada = function (num = 10) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// };

// showTabuada(1);

// exercicio 5

// const calcSoma = function () {
//   console.log(arguments);

//   return [...arguments].reduce((acc, cur) => acc + cur, 0);
// };

// console.log(calcSoma(10, 10, 10));

// exercicio 6

// const findWord = function (string, word) {
//   return string.split(" ").filter((item) => item == word).length;
// };

// console.log(findWord("a b c a d a", "d"));

// exercicio 7
// let pal = (num) => num.toString().split("").reverse().join("") == num;

// console.log(pal(111));
// console.log(pal(112));

// exercicio 8

// const factorial = function (num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// };

// console.log(factorial(5));

// exercicio 9

// const rand = function (min, max) {
//   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// };

// rand(10, 15);
