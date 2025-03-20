// exercicio 1

// const acc = function () {
//   let valueOne = prompt("insert min: ");
//   let valueTwo = prompt("insert max: ");
//   let min = valueOne < valueTwo ? +valueOne : +valueTwo;
//   let max = valueOne > valueTwo ? +valueOne : +valueTwo;

//   if (valueOne == valueTwo) {
//     min = max = valueOne;
//   }

//   let sum = 0;
//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(acc());

// exercicio 2

// let valid = false;
// let intArray = [];
// while (valid === false) {
//   let int = Number(prompt("Insert a number:"));
//   intArray.push(int);

//   if (int == 0) {
//     valid = true;
//     intArray.pop();
//     console.log(intArray);

//     console.log(Math.max(...intArray), Math.min(...intArray));
//   }
// }

// exercicio 3

// TMB (Masculino) = 10 X peso (kg) + 6.25 X altura (cm) - 5 x idade
// (anos) + 5
// • TMB (Feminino) = 10 X peso (kg) + 6.25 X altura (cm) - 5 X idade
// (anos) - 161

// const calcTMB = function (gender, altCm, pesoKg, idadeAnos) {
//   let k = gender == "m" ? 5 : -161;

//   return 10 * pesoKg + 6.25 * altCm - 5 * idadeAnos + k;
// };

// console.log(calcTMB("m", 1, 1, 1));
// console.log(calcTMB("f", 1, 1, 1));

// exercicio 4

// const numeroPerfeito = function (num) {
//   let divs = [];
//   for (i = num - 1; i >= 1; i--) {
//     if (num % i == 0) divs.push(i);
//   }

//   return divs.reduce((acc, curr) => acc + curr, 0) == num;
// };

// console.log(numeroPerfeito(6));
// console.log(numeroPerfeito(28));
// console.log(numeroPerfeito(496));
// console.log(numeroPerfeito(8128));
