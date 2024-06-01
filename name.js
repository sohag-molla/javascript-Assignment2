//1.Celsius Fahrenheit//

function celsiusToFahrenheit(celsius) {
  return (celsius *9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77


// //2.Check Number//

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false


// //3.Number Sum//

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(3, 4)); // 7
// console.log(sum(10, 20)); // 30


// //4.smallest number in an array//


// function findSmallestNum(arr) {
//   return Math.min(...arr);
// }

// console.log(findSmallestNum([3, 5, 1, 9])); // 1
// console.log(findSmallestNum([-1, -5, 0, 10])); // -5


// //5.vowels in a string//

// function countVowels(str) {
//   let vowels = 'aeiouAEIOU';
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("hello world")); // 3
// console.log(countVowels("Javascript")); // 3


// //6.first element of an array//


// function getFirstElement(arr) {
//   return arr[0];
// }

// console.log(getFirstElement([1, 2, 3])); // 1
// console.log(getFirstElement(["a", "b", "c"])); // "a"


// //7.argument of array//


// function isArrayEmpty(arr) {
//   return arr.length === 0;
// }

// console.log(isArrayEmpty([])); // true
// console.log(isArrayEmpty([1, 2, 3])); // false



// //8.factorial of a number//

// function factorialize(num) {
//   if (num === 0 || num === 1) return 1;
//   return num*factorialize(num - 1);
// }

// console.log(factorialize(5)); // 120
// console.log(factorialize(7)); // 5040


// //9.reverse a string//


// function reverseString(str) {
//   return str.split('').reverse().join("");
// }

// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("world")); // "dlrow"


// //10.string to lowercase//


// function toLowerCase(str) {
//   return str.toLowerCase();
// }

// console.log(toLowerCase("HELLO WORLD")); // "hello world"
// console.log(toLowerCase("JavaScript")); // "javascript"


// //11.length of a string//


// function stringLength(str) {
//   return str.length;
// }

// console.log(stringLength("hello")); // 5
// console.log(stringLength("world")); // 5


// //12.merge two arrays//


// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]



// //13.last element of an array//


// function getLastElement(arr) {
//   return arr[arr.length -1];
// }

// console.log(getLastElement([1, 2, 3])); // 3
// console.log(getLastElement(["a", "b", "c"])); // "c"


// //14.character of a string//


// function getFirstCharacter(str) {
//   return str[0];
// }

// console.log(getFirstCharacter("hello")); // "h"
// console.log(getFirstCharacter("world")); // "w"



// //15.sum of all elements in an array//


// function sumArray(arr) {
//   return arr.reduce((sum,current) => sum + current,0);
// }

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([-1, -2, -3, -4])); // -10
// console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
