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

let valid = false;
let intArray = [];
while (valid === false) {
  let int = Number(prompt("Insert a number:"));
  intArray.push(int);

  if (int == 0) {
    valid = true;
    const intArrayTrim = intArray.slice(-1);
    console.log(intArrayTrim);

    console.log(Math.max(...intArrayTrim));
    console.log(Math.min(...intArrayTrim));
  }
}
