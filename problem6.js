/*

Sum square difference

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

// Create an  empty array.
const numbers = [];

// Fill the array with 1 - 100.
for(let i = 1; i < 101; i++){
  numbers.push(i);
}

// @ numbers = [1, 2, 3, ..., 99, 100]

// Make a new array using the spread operator that contains the numbers squared.
const numbersSquare = [...numbers].map(number => Math.pow(number, 2));

// Reduce the numbers array and raise it to the power of 2 to get the square of the sum.
const squareOfSum = Math.pow(numbers.reduce((prevValue, currentValue) => prevValue + currentValue), 2);

// Simply reduce the numbersSquare to get the sum of squares.
const sumOfSquares = numbersSquare.reduce((prevValue, currentValue) => prevValue + currentValue);

// Subtract the square of sum from the sum of squares.
console.log(squareOfSum - sumOfSquares);