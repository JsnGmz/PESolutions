/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?

*/

// Function to check if a number is prime.
const isPrime = (num) => {
  // 2 is the first prime number 1 and 0 are not prime so return false.
  if(num < 2) {
    return false;
  }
  // otherwise check if there is a factor between [2, num].
  for(let i = 2; i < num; i++){
    // If there is return false.
    if(num % i === 0) {
      return false;
    }
  }
  // All other cases we can return true.
  return true;
}

// Function to find the xth prime number. Take in a number.
const xPrimeNum = (num) => {
  // Looking for 0th prime number or -Xth prime number doesn't make sense.
  if(num < 1) {
    return 'Insert number >= 1.'
  }
  // We have a counter at 0 and a current prime number set to null.
  let count = 0;
  let currentPrime = null;
  // 2 is the first prime number no need to start earlier. And we want to keep looping until we find the xth prime number.
  for(let i = 2; count < num; i++) {
    // if a number is prime set currentPrime to that number. Then increase the counter by 1.
    if(isPrime(i)) {
      currentPrime = i;
      count++;
    }
  }
  // return the current prime.
  return currentPrime;
}

console.log(xPrimeNum(10001));