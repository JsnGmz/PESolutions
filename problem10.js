/*
Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

// TODO: Return to problem and write a faster approach.

/*
  * Currently both solutions work but take quite a bit of time to execute.
  * In the future will need to return to problem and come up with a speedier 
  * solution.
*/

// * create an array from 2 - 2,000,000
const listOfNums = (num) => {
  return Array.from({length: num - 1}, (v, k) => k + 2);
}

// * Eleminate non primes.
const sieve = (array) => {
  // * first make a clone of the array.
  let primes = [...array];
  // * then iterate through it.
  for(let i = 0; i < primes.length; i++){
    // * set the value of p the lowest prime number.
    let p = primes[i];
    // * reassign primes to a filtered version of itself.
    primes = primes.filter((num, idx) => {
      // * if the element is divisible by p and not itself remove it.
      // * On the first pass this will remove everything divisible by
      // * 2 but not 2 itself on the second pass 3, and so on.
      if(num % p === 0 && idx !== i){
        return false;
      }
      // * Otherwise keep it in the array.
      return true;
    });
  }
  // * lastly return the array
  return primes;
}

const list = listOfNums(2000000);
// * show the array of primes and the sum.
console.log(sieve(list), sieve(list).reduce((prev, curr) => prev + curr));

/*
  * This is the method that first comes to mind. It is trial division. While this is
  * the easiest method to understand it is also on the slower side.
*/
// const isPrime = (num) => {
//   if(num < 2) {
//     return false;
//   } else if(num === 2) {
//     return true;
//   } else {
//     for(let i = 2; i < num; i++){
//       if(num % i === 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// const sumOfPrimes = (num) => {
//   const primes = [];
//   if(num > 2) {
//     primes.push(2);
//     for(let i = 3; i < num; i+=2){
//       console.log(i);
//       if(isPrime(i)) {
//         primes.push(i);
//       }
//     }
//   }
//   return primes.reduce((prevValue, currentValue) => prevValue + currentValue);
// }

// console.log(sumOfPrimes(2000000));