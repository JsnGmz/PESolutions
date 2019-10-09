/* 
Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.

*/

// Need to check if something is a palindrom.
const isPalindrom = (num) => {
  const str = num.toString(); // turn the number into a string.
  const reversed = str.split('').reverse().join(''); // reverse the string by splitting it to an array reversing the array and joinning it back to a string.
  return str === reversed; // check if the str and the reversed string are equal.
}

// An array to hold all of our palindromic numbers.
const palindromicNumbers = [];

// The largest product of two three digit numbers is 999 x 999 = 998,001. The smallest is 100 x 100 = 10,000
for(let i = 999; i > 100; i--){
  for(let j = 999; j > 100; j--){
    if(isPalindrom(i * j)) { // check if the product is a palindrom.
      palindromicNumbers.push(i*j); // if it is add it to our array.
    }
  }
}

palindromicNumbers.sort((a, b) => b - a); // Sort our array in reverse order.
console.log(palindromicNumbers[0]); // Largest number is first.

