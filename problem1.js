/* 

Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

*/

// Create an array that will hold all the multiples of 3 and 5.
const multiplesOfThreeAndFive = [];

// We want every multiple of 3 and 5 below 1000.
for(let i = 1; i < 1000; i++) {
  // If there is a remainder of 0 add it to the array.
  if (i % 3 === 0 || i % 5 === 0) {
    multiplesOfThreeAndFive.push(i);
  }
}

// create the callback function for the reduce function to use.
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(multiplesOfThreeAndFive.reduce(reducer));