/*
Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

// * Making use of Big Int again to handle the large number.
const bigInt = require('big-integer');

// * set num equal to 2^1000.
const num = bigInt(Math.pow(2, 1000));

// * Make an array by coverting the number to a string and splitting each character.
const arr = num.toString().split('');

// * Map the array converting each character to an integer and then reducing said array.
console.log(arr.map(ele => parseInt(ele)).reduce((prev, next) => prev + next));
